"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function insertUser(username, email, password, firstname, lastname) {
    const response = await prisma.user.create({
        data: {
            username,
            email,
            password,
            firstname,
            lastname
        }
    });
    console.log(response, "RESPONSE");
}
console.log(insertUser('vrutansh1', 'vru@gmail.co', '1236', 'vr', 'atel'), "User Created ....");
async function updateUser(username, email, password, firstname, lastname) {
    prisma.user.updateMany({
        data: {
            username,
            email,
            password,
            firstname,
            lastname
        }
    });
}
//# sourceMappingURL=index.js.map