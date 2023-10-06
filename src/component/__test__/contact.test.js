import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals'; 

import Contact from "../Contact";




describe("Contact us taste page",function(){


    // You can use it or test
    it("should load contact us component",()=>{
        render(<Contact />);
    
        const heading =  screen.getByRole("heading")
        console.log("should component test in contact page")
        expect(heading).toBeInTheDocument();
    
    })
    
    it("should load button inside my contact component",()=>{
        render(<Contact/>);
    
        //const button = screen.getByRole("button");
        const button =  screen.getByRole("button")
    
        expect(button).toBeInTheDocument();
    });
    
    it("should load input name inside my contact component",()=>{
        render(<Contact/>);
    
        //const button = screen.getByRole("button");
        const inputName =  screen.getByPlaceholderText("Name")
    
        expect(inputName).toBeInTheDocument();
    });
    
    it("should load input message inside my contact component",()=>{
        render(<Contact/>);
    
        //const button = screen.getByRole("button");
        const inputMsg =  screen.getByPlaceholderText("Message")
    
        expect(inputMsg).toBeInTheDocument();
    });
    
    it("should load 2 input on the Contact component",()=>{
        render(<Contact/>);
    
        //const button = screen.getByRole("button");
        const inputBox =  screen.getAllByRole("textbox")
    
        // expect(inputBox).toBeInTheDocument();
        console.log(inputBox.length )
        expect(inputBox.length).toBe(2);
    });

})
