'use client'
import { useStudentData } from "./Hooks/getUserData";
export default function Home() {
  const studentData = useStudentData();
  return (
    <div className="p-10">
      <h1> {studentData?.first_name}</h1>
      <h1> {studentData?.last_name}</h1>
      <h1> {studentData?.contact}</h1>
      <h1> {studentData?.studentCode}</h1>
      <h1> {studentData?.email}</h1>
      <h1> {studentData?.last_name}</h1>
      <button className="btn btn-info">button</button>
    </div>
  );
}

