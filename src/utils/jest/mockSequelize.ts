jest.mock('../database', () => {
    return { sequelize: {} };
});
  
jest.mock('sequelize', () => {
    class MockModel {
        public static init() {}
    }
    return {
        ...jest.requireActual('sequelize'),
        Model: MockModel,
    };
});
