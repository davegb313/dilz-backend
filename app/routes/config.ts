const router = require('express').Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

router.get("/", (req:any, res:any) => {
    return res.json('Backend is working');
});

router.post('/create', (req: any, res: any) => {
    console.log(req)
    prisma.user.create({
        data: {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email
        }
    })
} )



module.exports = router;