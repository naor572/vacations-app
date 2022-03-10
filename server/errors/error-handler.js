let errorHandler = (e, request, response, next) => {
  // e = my Server error --> IT HAS AN ENUM INSIDE (!!) called errorType
  if (e.statusCode != undefined) {
    console.error(e);
    response.status(e.statusCode).json({ error: e.message });
    return;
  }

  // This is most definitely a bug (not a ServerError) and so we want the log
  // Reaching here means that we got an UNEXPECTED BUG which we didn't wrap with a ServerError
  console.error(e);
  response.status(700).json({ error: "General error" });
};

module.exports = errorHandler;
