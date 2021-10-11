export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string }

export type  tasksOutputDTO = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId : string
}