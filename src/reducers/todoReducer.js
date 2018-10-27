const INITIAL_STATE = {
    kidsTasks: {

        1/* Kid Id */: {
            week1: {
                Monday: {
                    todoId1: { title: 'Task1', done: true, score: 1 },
                    todoId2: { title: 'Task2', done: true, score: 2 }
                },
                Tuesday: {
                    task1: { done: true, score: 1 },
                    task2: { done: true, score: 2 }
                },
                Saturday: {
                    task1: { title: 'Test todo 1', done: true, score: 1 },
                    task2: { title: 'Test todo 2', done: true, score: 1 },
                },
            }
        },
        2: {
            week1: {
                Monday: {
                    task1: { done: true, score: 1 },
                    task2: { done: true, score: 2 }
                },
                Tuesday: {
                    task1: { done: true, score: 1 },
                    task2: { done: true, score: 2 }
                }
            }
        }
    }
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
