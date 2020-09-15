# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

class Name:
    def __init__(self, name):
        self.name = name
        self.check_name()


    def check_name(self):
        if isinstance(self.name, str):
            print("Check passed")
            return True
        return False

    def print_hi(self):
        # Use a breakpoint in the code line below to debug your script.
        print(f'Hi, {self.name}')  # Press ⌘F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    name = Name('PyCharm')
    name.print_hi()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
