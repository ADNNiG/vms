
import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

export async function POST (req : Request) {
    if (req.method === 'POST') {
        try {
            const{
                id,
                email,
                year,
                term,
                Class,
                
            } = await req.json();

            const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
             user: "adncpamarketing@gmail.com",
             pass: "eqai ikbr odtu ujnw",}
        });
        const mailOptions = {
            from: email,
            to: "adncpamarketing@gmail.com",
            subject: "VMS Student Result Checker",
            html: `
                <h1 className="text-vms">Student Result Checker</h1>
                <p>VMS ID NO: ${id}</p>
                <p>Email: ${email}</p>
                <p>Year: ${year}</p>
                <p>Term: ${term}</p>
                <p>Class: ${Class}</p>
            
            `
                
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json("application submitted");

    } catch (error) {
        return NextResponse.json('application not sent');

        }
    } else {
        return NextResponse.json("method not allowed");
    }
}