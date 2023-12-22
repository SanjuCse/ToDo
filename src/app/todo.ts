export class ToDo {
    toDoId!: number;

    taskName: string = "";

    taskSummary: string = "";

    isFinished: boolean = false;

    createdDate!: Date;

    updatedDate!: Date;
}