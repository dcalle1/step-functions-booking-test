export const handler = async (event, context) => {
  const req = {
    event,
    context
  }
  console.log('req: ', req);
  
  return {
    originalRequest: req,
    getTKBookingStatus: 'TK booking there :3',
  };
}