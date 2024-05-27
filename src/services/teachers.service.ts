import { Injectable } from "@angular/core";
import { Teacher } from "@interfaces/teacher.interface";
import { teachersData } from "src/mocks/teachers.mocks";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    getTeachers(): Promise<Teacher[]> {
        return new Promise((resolve, reject) => {
            const data = teachersData
            resolve(data);
        })
    }

    getFilterTeachers(filterValue: string): Promise<Teacher[]> {
        return new Promise((resolve) => {
            const data = teachersData.filter(teacher => teacher.name.toLocaleLowerCase().includes(filterValue) || teacher.profession.join(', ').toLocaleLowerCase().includes(filterValue))
            resolve(data);
        })
    }

    getTeachersById(id: number): Promise<Teacher | null> {
        return new Promise((resolve) => {
            const teacher = teachersData.find((t) => t.id == id);
            console.log('teacher -> ', teacher)
            if (teacher) {
                resolve(teacher);
            } else {
                resolve(null)
            }
        });
    }
}