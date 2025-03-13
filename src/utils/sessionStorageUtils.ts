export const storeImageInSessionStorage  = (image : File) =>{ 
    const render = new FileReader(); 
    render.onloadend =() => { 
        sessionStorage.setItem("image", render.result as string); 

    }; 
    render.readAsDataURL(image); 
}; 

export const getImageFromSessionStorage = (): File | null => { 
const storedImage  = sessionStorage.getItem("image"); 
if(storedImage){ 
    const byteCharacters = atob(storedImage.split(",")[1]); 
    const byteArrays = new Uint8Array(byteCharacters.length); 
    for(let i = 0 ; i < byteCharacters.length ;i++){
        byteArrays[i] = byteCharacters.charCodeAt(i);
    }
    const imageFile = new File([byteArrays], "uploaded-image", { type: "image/jpeg" });
    return imageFile;

}
return null ; 

}    
export const removeImageFromSessionStorage = () => {
    sessionStorage.removeItem("image");
  };