// [START cloud_tasks_appengine_create_task]
// Imports the Google Cloud Tasks library.
import { CloudTasksClient, protos } from "@google-cloud/tasks";
import { google } from "@google-cloud/tasks/build/protos/protos";
import { Request, Response } from "express";
import config from "../config/config";
import { CreateTaskPayload } from "../interfaces/create_task.payload";

export const createTaskController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // Instantiates a client.
  const { body } = req;
  let payload = {
    name: "Hello Rodrigo!!",
  };

  if (!body.inSeconds) {
    body.inSeconds = 60;
  }

  if (body.payload) {
    payload = body.payload;
  }

  const client = new CloudTasksClient();
  const parent = client.queuePath(
    config.project,
    config.location,
    config.queue
  );

  const task: google.cloud.tasks.v2.ITask = {
    httpRequest: {
      httpMethod: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `https://warm-atoll-32606.herokuapp.com/handle`,
      body: Buffer.from(JSON.stringify(payload)).toString("base64"),
    },
    scheduleTime: { seconds: body.inSeconds + Date.now() / 1000 },
  };

  // Send create task request.
  console.log("Sending task:");
  console.log(task);
  const request: protos.google.cloud.tasks.v2.ICreateTaskRequest = {
    parent: parent,
    task: task,
  };

  const [response] = await client.createTask(request);
  console.log(`Created task ${response.name}`);

  return res.status(201).json({
    result: "The task was sucessfully created",
    body: payload,
  });
};
