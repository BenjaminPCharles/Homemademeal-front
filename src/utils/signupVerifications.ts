export const signupVerificationPassword = (password: string, confirmPassword: string): string => {
    const passwordSpecialCaractere: RegExp = new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{8,}$') ;

    if(passwordSpecialCaractere.test(password)){
        if(password === confirmPassword){
            return "Success";
        }else {
            return "- Le mot de passe doit être le même que la confirmation de mot de passe"
        }
    }else {
        return "- Le mot de passe doit contenir au moins une majuscule une minuscule un nombre et un caractére spécial"
    }
}