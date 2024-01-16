// 404 routes
export const notFound = (req, res, next) => {
  const err = new Error(`Not found the requested URL - ${req.originalUrl}`)
  res.status(404)
  next(err)
}

// handle Errors
export const errorHandler = (err, req, res, next) => {
  if (res.headerSent) {
    return next(err)
  }
  res.status(err.code || 500).json({
    success: false,
    message: err.message || 'An unknown error occurred',
  })
}
