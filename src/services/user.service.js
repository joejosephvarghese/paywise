import amqp from "amqplib";



export const manageQuees = async () => {
  console.log("🟡 manageQuees() called");

  try {
    const connection = await amqp.connect("amqp://localhost");
    console.log(" Connected to RabbitMQ");

    const channel = await connection.createChannel();
    console.log(" Channel created");

    const queue = "hello";

    await channel.assertQueue(queue, { durable: false });
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(
      queue,
      (msg) => {
        if (msg) {
          console.log("📩 Received:", msg.content.toString());
        }
      },
      { noAck: true }
    );
  } catch (error) {
    console.error(" RabbitMQ error:", error.message);
  }
};


