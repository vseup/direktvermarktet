import { Country, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { create } from 'domain';

const prisma = new PrismaClient();

async function main() {
    await seedFarms();
    await seedFarmShops();
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

async function seedFarms(): Promise<void> {
    for (let i = 0; i < 5; i++) {
        const paragraphCount = faker.number.int({ min: 2, max: 5 });
        await prisma.farm.create({
            data: {
                name: `${faker.person.lastName()} Farm`,
                slogan: "Family-run Farm",
                description: faker.lorem.paragraphs(paragraphCount),
                url: faker.internet.url(),
                location: {
                    create: {
                        street: faker.location.street(),
                        houseNumber: faker.number.int({ min: 1, max: 10 }).toString(),
                        postalCode: faker.location.zipCode(),
                        city: faker.location.city(),
                        country: Country.GERMANY
                    }
                }
            },
        });
    }
}

async function seedFarmShops(): Promise<void> {

    const farms = await prisma.farm.findMany({
        include: { location: true }
    });

    for (const farm of farms) {

        const shopCount = faker.number.int({ min: 1, max: 3 });

        for (let i = 0; i < shopCount; i++) {
            const paragraphCount = faker.number.int({ min: 2, max: 5 });
            const productCount = faker.number.int({ min: 2, max: 7 });

            const location = await prisma.location.create({
                data: {
                    street: farm.location.street,
                    houseNumber: farm.location.houseNumber,
                    postalCode: farm.location.postalCode,
                    city: farm.location.city,
                    country: Country.GERMANY
                }
            })

            await prisma.farmShop.create({
                data: {
                    farmId: farm.id,
                    name: `${farm.name}shop ${i + 1}`,
                    slogan: "Family-run Farm",
                    description: faker.lorem.paragraphs(paragraphCount),
                    url: faker.internet.url(),
                    products: Array.from({ length: productCount }, () => faker.commerce.product()).join(', '),
                    locationId: location.id
                },
            });
        }
    }
}