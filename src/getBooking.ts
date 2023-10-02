export const handler = async (event, context) => {
  const req = {
    event,
    context
  }
  console.log('req: ', req, 'tk_exists: ', process.env.TK_EXISTS);
  
  return {
    originalRequest: req,
    getBookingStatus: process.env.TK_EXISTS,
  };
}