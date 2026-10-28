/* Write your T-SQL query statement below */
select Students.student_id,Students.student_name,Subjects.subject_name,
case 
    when Examinations.subject_name is null then 0
    else count(*) 
end as attended_exams
from Students
cross join Subjects
left join Examinations
on Examinations.student_id=Students.student_id
and Subjects.subject_name=Examinations.subject_name
group by Subjects.subject_name,Students.student_id,Students.student_name,Examinations.subject_name
order by Students.student_id