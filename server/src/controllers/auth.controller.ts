import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";


export const register = async (
    req: Request,
    res: Response
) => {

    try {

        const {
            name,
            email,
            password,
            role
        } = req.body;


        const existingUser = await User.findOne({
            email
        });


        if (existingUser) {

            return res.status(400).json({
                message: "Email already exists"
            });

        }


        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        const user = await User.create({

            name,
            email,
            password: hashedPassword,
            role

        });


        res.status(201).json({

            message: "Register success",
            user

        });


    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }

};