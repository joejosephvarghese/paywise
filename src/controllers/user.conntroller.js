import { User } from "../models/index.js";

import amqp from "amqplib";

const register = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    const user = await User.findOne({ where: { email } });
    if (user) {
      throw new Error("User is already registered");
    }

    await User.create(req.body);

    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const queue = "hello";
    const msg = `New user registered: ${email}`;

    await channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(msg));

    console.log(" [x] Sent %s", msg);

    setTimeout(() => {
      connection.close();
    }, 500);

    res.status(200).json("Ok");


  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { register };
