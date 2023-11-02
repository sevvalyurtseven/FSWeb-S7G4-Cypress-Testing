/// <reference types="cypress" />

describe("Product Form Testleri", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/");
    });
  
    it("İsim inputuna bir isim girilir.", () => {
      cy.get("#f_isim").type("AA");
  
  //Girilen ismin dogru oldugunu kontrol etme:
      cy.get("#f_isim_error")
        .should("be.visible")
        .should("have.text", "İsim en az 3 karakter olmalıdır");

        
  
      
    });

    it("Email inputuna bir e-posta girilir", () => {
        cy.get("input[name= email]" ).type("johndoe@example.com");
    });

    it("Şifre inputuna bir şifre girilir", () => {
        cy.get("input[name=sifre]").type("password123");
    });

    it("Kullanım koşulları kutusu işaretlenir", () => {
        cy.get("input[name=kvkk]").check();
    });

    //Formun gönderilip gönderilemediğini test etme:

    it("Form gönderilebilir olmalıdır", () => {
        cy.get("input[name=isim]").type("AAA");
        cy.get("input[name= email]" ).type("johndoe@example.com");
        cy.get("input[name=sifre]").type("password123");
        cy.get("input[name=kvkk]").check();
        cy.get("button[type=submit]").should("be.enabled").click();
    });

    //Boş bir input bırakılırsa formun doğrulamasını test etme:


  });
  