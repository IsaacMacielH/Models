const User = require('./../../app/models/user');
describe("Unit Test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "IsaacMaciel", "Isaac", "Bio");
        expect(user.id).toBe(1);
        expect(user.username).toBe("IsaacMaciel");
        expect(user.bio).toBe("Bio");
    });
    test('Add getters', () => {
        const user = new User(1, "IsaacM", "Isaac", "Bio");
        expect(user.getUsername).toBe("IsaacM");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });
    test('Add setters', () => {
        const user = new User(1, "IsaacM", "Isaac", "Bio");
        user.setUsername = "Gilmar";
        expect(user.username).toBe("Gilmar");
        user.setBio = "New bio";
        expect(user.bio).toBe("New bio");
    });
})