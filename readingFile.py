file = open("wordList.raw", "r")
filetowrite = open("arrayOfWords.js", "w")
myString = ""

# print('[', end='')
myString = myString + '['

for line in file:
    for word in line.split():
        if(word.isalpha()):
            # print ('"'+word + '"'+',', end='')
            myString = myString + '"'+word + '"'+', '
# print ('"done"]')
myString = myString + '"done"]'
print (myString)
filetowrite.write(myString)
