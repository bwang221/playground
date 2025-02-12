from .sort import (
    sort, 
    STANDARD,
    SPECIAL,
    REJECTED
)

def test_standard():
    assert sort(10, 10, 10, 10) == STANDARD

def test_special():
    assert sort(10, 10, 10, 30) == SPECIAL
    assert sort(100000, 10, 10, 10) == SPECIAL

def test_rejected():
    assert sort(10, 1000, 1000, 30) == REJECTED
