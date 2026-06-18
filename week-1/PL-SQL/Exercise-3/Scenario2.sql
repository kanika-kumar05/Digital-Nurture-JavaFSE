CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN employees.department_id%TYPE,
    p_bonus_percent IN NUMBER
)
IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE department_id = p_department_id;

    COMMIT;
END;
/

EXEC UpdateEmployeeBonus(10, 5);