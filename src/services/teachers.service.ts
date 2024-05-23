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
}