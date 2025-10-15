describe("The Home Page", () => {
    it("successfully loads", () => {
        cy.visit("/");
    });

    it("has the right title", () => {
        cy.visit("/").title().should("eq", "RPSGame");
    });

    it("has a Rock button", () => {
        cy.visit("/")
            .contains("Rock")
            .should("be.visible")
            .and("have.prop", "tagName")
            .and("eq", "BUTTON");
    });

    it("has a Paper button", () => {
        cy.visit("/")
            .contains("Paper")
            .should("be.visible")
            .and("have.prop", "tagName")
            .and("eq", "BUTTON");
    });

    it("has a Scissors button", () => {
        cy.visit("/")
            .contains("Scissors")
            .should("be.visible")
            .and("have.prop", "tagName")
            .and("eq", "BUTTON");
    });
});

describe("Click each of the buttons", () => {
    it("click on the Rock button", () => {
        cy.visit("/").contains("Rock").click();
        cy.get("#userChoice").should("have.text", "rock");
    });

    it("click on the Paper button", () => {
        cy.visit("/").contains("Paper").click();
        cy.get("#userChoice").should("have.text", "paper");
    });

    it("click on the Scissors button", () => {
        cy.visit("/").contains("Scissors").click();
        cy.get("#userChoice").should("have.text", "scissors");
    });
});

describe("Test game scenario when user chooses Rock", () => {
    it("click on the Rock button and tie", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 0);
        });
        cy.contains("Rock").click();
        cy.get("#computerChoice").should("have.text", "rock");
        cy.get("#result").should("have.text", "It's a tie!");
    });

    it("click on the Rock button and win", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 2);
        });
        cy.contains("Rock").click();
        cy.get("#computerChoice").should("have.text", "scissors");
        cy.get("#result").should("have.text", "You win!");
    });

    it("click on the Rock button and lose", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 1);
        });
        cy.contains("Rock").click();
        cy.get("#computerChoice").should("have.text", "paper");
        cy.get("#result").should("have.text", "You lose!");
    });
});

describe("Test game scenario when user chooses Paper", () => {
    it("click on the Paper button and tie", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 1);
        });
        cy.contains("Paper").click();
        cy.get("#computerChoice").should("have.text", "paper");
        cy.get("#result").should("have.text", "It's a tie!");
    });

    it("click on the Paper button and win", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 0);
        });
        cy.contains("Paper").click();
        cy.get("#computerChoice").should("have.text", "rock");
        cy.get("#result").should("have.text", "You win!");
    });

    it("click on the Paper button and lose", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 2);
        });
        cy.contains("Paper").click();
        cy.get("#computerChoice").should("have.text", "scissors");
        cy.get("#result").should("have.text", "You lose!");
    });
});

describe("Test game scenario when user chooses Scissors", () => {
    it("click on the Scissors button and tie", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 2);
        });
        cy.contains("Scissors").click();
        cy.get("#computerChoice").should("have.text", "scissors");
        cy.get("#result").should("have.text", "It's a tie!");
    });

    it("click on the Scissors button and win", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 1);
        });
        cy.contains("Scissors").click();
        cy.get("#computerChoice").should("have.text", "paper");
        cy.get("#result").should("have.text", "You win!");
    });

    it("click on the Scissors button and lose", () => {
        cy.visit("/");
        cy.window().then((win) => {
            cy.stub(win, "getRandom").callsFake(() => 0);
        });
        cy.contains("Scissors").click();
        cy.get("#computerChoice").should("have.text", "rock");
        cy.get("#result").should("have.text", "You lose!");
    });
});
