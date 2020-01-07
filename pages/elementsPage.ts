export class ElementsPage{

    // Sign Up page
    // Sign Up link
    get signUp(){
        return browser.$('//a[@href = "./signUp.html"]')
    }

    // Sign In page
    // Username SignUp
    get username(){
        return browser.$('#usernameSignUp')
    }

    // Name SignUp
    get name(){
        return browser.$('#nameSignUp')
    }

    // Email SignUp
    get email(){
        return browser.$('#emailSignUp')
    }

    // PhoneNumber SignUp
    get phoneNumber(){
        return browser.$('#phonenumberSignUp')
    }

    // Occupation SignUp
    get occupation(){
        return browser.$('#occupationSignUp')
    }

    // Gender SignUp
    get gender(){
        return browser.$('#genderSignUp')
    }

    // Age SignUp
    get age(){
        return browser.$('#ageSignUp')
    }

    // Location SignUp
    get location(){
        return browser.$('#locationSignUp')
    }

    // Age SignUp
    get password(){
        return browser.$('#passwordSignUp')
    }

    // Location SignUp
    get confirmPassword(){
        return browser.$('#confirmPasswordSignUp')
    }

    // Sign Up button
    get signUpButton(){
        return browser.$('#signUpButton')
    }

    // Sign In Page
    // Usename or email SignIn
    get userNameSignIn(){
        return browser.$('#usernameSignIn')
    }

    // Password SignIn
    get passwordSignIn(){
        return browser.$('#passwordSignIn')
    }

    // SignIn Button
    get signInButton(){
        return browser.$('#signInButton')
    }
}