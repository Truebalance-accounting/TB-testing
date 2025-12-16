export const submitContactForm = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate success
  return {
    success: true,
    message: "Thank you for reaching out! We'll be in touch shortly."
  };
};

export const subscribeNewsletter = async (email: string): Promise<{ success: boolean }> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};