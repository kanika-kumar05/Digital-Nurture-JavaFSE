BEGIN
    FOR loan_rec IN (
        SELECT loan_id, customer_id, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ' || loan_rec.customer_id ||
            ', your loan ' || loan_rec.loan_id ||
            ' is due on ' || loan_rec.due_date
        );
    END LOOP;
END;
/