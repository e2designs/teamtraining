import pytest
from mock import patch
from main import Name


@patch('main.Name.check_name')
def test_init_pass(mock_check):
    myname = "Something really cool"
    name = Name(name=myname)
    assert name.name == myname
    assert mock_check.called

def test_check_name_pass():
    myname = "Something really cool"
    name = Name(name=myname)
    response = name.check_name()
    assert response, "Response did not equal True"

def test_check_name_fail():
    myname = 3
    name = Name(name=myname)
    response = name.check_name()
    assert not response, "Response did not equal False"

def test_check_name_print():
    myname = "Somename"
    name = Name(name=myname)
    result = name.print_hi()
    expect = f"Hi, {myname}"
    assert result == expect

def test_check_name_no_print():
    myname = 4444444444
    name = Name(name=myname)
    result = name.print_hi()
    expect = None
    assert result == expect
