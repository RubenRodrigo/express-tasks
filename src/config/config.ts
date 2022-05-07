export default {
  project: process.env.PROJECT || "my-project-id",
  location: process.env.LOCATION || "my-appengine-queue",
  queue: process.env.QUEUE || "us-central1",
  url: process.env.BASE_URL || "http://localhost:3000",
};
