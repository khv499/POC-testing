import { ElementsPage } from '../pages/elementsPage'
import { BasePage } from '../pages/basePage'

export class Functionalities extends BasePage{

    elements : ElementsPage;
    emailId : string;
    password : string;
    username : string;
    name : string;
    phoneNumber : string;
    occupation : string;
    age : string;
    location : string;
    confirmPassword : string;

    constructor(emailId : string, password : string, username : string, name : string, phoneNumber : string, occupation : string, age : string, location : string, confirmPassword : string){
        super();
        this.emailId = emailId;
        this.password = password;
        this.username = username;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.occupation = occupation;
        this.age = age;
        this.location = location;
        this.confirmPassword = confirmPassword;
        this.elements = new ElementsPage();
    }

    open() {
        super.open(''); 
        browser.maximizeWindow()     
    }

    samplePoc(){
        this.open()
        browser.pause(2000)
        this.elements.signUp.click()
        browser.pause(2000)
        this.elements.username.setValue(this.username)
        this.elements.name.setValue(this.name)
        this.elements.email.setValue(this.emailId)
        this.elements.phoneNumber.setValue(this.phoneNumber)
        this.elements.occupation.setValue(this.occupation)
        this.elements.gender.selectByIndex(1)
        this.elements.age.setValue(this.age)
        this.elements.location.setValue(this.location)
        this.elements.password.setValue(this.password)
        this.elements.confirmPassword.setValue(this.confirmPassword)
        browser.pause(2000)
        this.elements.signUpButton.click()
        browser.pause(2000)
        this.elements.userNameSignIn.setValue(this.username)
        this.elements.passwordSignIn.setValue(this.password)
        browser.pause(2000)
        this.elements.signInButton.click()
        browser.pause(2000)
    }
}