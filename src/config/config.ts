export default {
  project: process.env.PROJECT || "my-project-id",
  location: process.env.LOCATION || "us-central1",
  queue: process.env.QUEUE || "my-appengine-queue",
  url: process.env.BASE_URL || "http://localhost:3000",
};
