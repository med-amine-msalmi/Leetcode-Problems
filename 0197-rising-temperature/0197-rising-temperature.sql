SELECT w2.id
FROM Weather AS w2
WHERE EXISTS (
    SELECT 1
    FROM Weather AS w1
    WHERE DATEDIFF(day, w1.recordDate, w2.recordDate) = 1
      AND w2.temperature > w1.temperature
);