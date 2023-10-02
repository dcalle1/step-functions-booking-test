export const handler = req => {
  console.log('req: ', req);
  
  return {
    code: 200,
    response: JSON.stringify({
      originalRequest: {...req},
      createTKBookingStatus: 'create done',
    })
  };
}