export const handler = async (event, context) => {
  try {
    const req = {
      event,
      context
    }
    console.log('req: ', req, 'tk_exists: ', process.env.TK_EXISTS);

    return {
      originalReq: JSON.stringify(req),
      getBookingStatus: process.env.TK_EXISTS,
    };
  } catch(e) {
    console.error(e);
  }
}