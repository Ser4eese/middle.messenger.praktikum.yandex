export const getFormData = (event: SubmitEvent): Record<string, string> => {
    const formData: Record<string, string> = {};
    event.preventDefault();
    if (event.target == null) return formData;
    const allInput = (event.target as HTMLFormElement).querySelectorAll('input');
    allInput.forEach((input: HTMLInputElement) => {
        formData[input.name] = input.value;
        input.dispatchEvent(new Event('blur'));
    });
    console.log(formData);
    return formData;
};
