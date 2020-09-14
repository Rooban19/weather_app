const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {

        tasksToComplete = []
        const check = this.tasks.filter((task) => {
            if (task.completed === false) {
                tasksToComplete.push({
                    title: task.text,
                })

            } else {
                console.log("Completed")
            }
        })
        return tasksToComplete

    }
}


console.log(tasks.getTasksToDo())