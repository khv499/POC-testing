import {Functionalities} from '../src/functionalities' 
import {Values} from '../config/values'

let values = new Values();

describe("UI Automation", function(){
    it("Sample POC Testing", function(){
        let test = new Functionalities(values.emailId, values.password, values.username, values.name, 
            values.phoneNumber, values.occupation, values.age, values.location, values.confirmPassword)
        
        test.samplePoc()
        let title = browser.getTitle()
        expect(title).toBe('Harsha Vardhan Koneru');
    })
})