CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN accounts.account_id%TYPE,
    p_to_account IN accounts.account_id%TYPE,
    p_amount IN NUMBER
)
IS
    v_balance accounts.balance%TYPE;
BEGIN
    SELECT balance
    INTO v_balance
    FROM accounts
    WHERE account_id = p_from_account;

    IF v_balance >= p_amount THEN
        UPDATE accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;

        UPDATE accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;

        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Transfer successful');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance');
    END IF;
END;
/


SET SERVEROUTPUT ON;
EXEC TransferFunds(101, 102, 500);