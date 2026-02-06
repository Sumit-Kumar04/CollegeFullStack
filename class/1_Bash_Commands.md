----------------------------------day1---------------------
#Bash Commands
unix  
ls
shell-interperator 
@  and /

#mkdir-->make directory
mkdir test
mkdir {1..5}

REMOVE  
rm test{1..3}
rm -r test{1..3}
rm -ri test{1..3}-->ask for deletion      
 $ rm -ri testf
rm: remove regular empty file 'testf'? YES


kernel shell 
herirachy-shell kernel
shell is gui
kernel techal with hardware


Root folder
home folder-->users 
etc folder-->configuration
temp folder-->cache files

---------------------------------------Day2-----------------------------
test
    |->subtest
Absolute path:r full path     and start with /     -->    /c/Users/sumit/test
Relative Path:cd subtest     from your existing level you access    means not going outside  does not start with /   cd test/subtest
use camel case-->testSubFolder
snakeCase-->test_sub_folder
For space-->mkdir "test sub folder"

make folder level one inside other
level 1 to level 5

mkdir 

rm -r  remove folder recursively
rm test.py
mkdir -p level1/level2/level3/level4/level5     p-parent

cd  ..  previous directory
cd .    current directory
cd -     back you to the previous bash directory
cd ~     go to root dir 

Hidden files
.env-protected files
ls -a    all files and directories
./ current directory
../  sublevel

every file within a directory consists id ->inode
ls -i

Linking files
 ln random1.txt random2.txt                random1.txt  is source file    random2.txt does not exits for now



--------------------------------------------------------Day3----------------------------------------------
touch   ----->for creating file
echo  -->to add data
Example- echo Random content in a text file>sample.txt
cat     ->for viewing data 

ls -l
1  2-4  5-7  8-10
-  rw-  r--  r-- 1 sumit 197609 30 Jan  9 14:04 sample.txt

filetype      1   
Owner 2-4
group  5-7
others  8-10
read =4;
write=2
execute=1
u g o a
#Read permission 
 


 ubantu-->
 cd ../..

 --------------------Day 4----------------------------------------
 find and grep diff
 grep --> find text or pattern 
 grep "Contetn" file.txt
 grep is sensitive
  grep -i "Contetn" file.txt                   -->-i case insensitive
   grep -ri "Contetn" test/   
  -ri           -->recursively 
  -n            -->line number 
  file2.txt:1:third file content
 -I ---> prevent binary files from search    excluded images pdfs  .csv also ignore 

 \\Search for multiple words (logical OR)
    grep -E "word1|word2" filename.txt
     grep -Er "(car|bike)"  test/

FIND
by time ,permission ,size,name
find ./test -name "file2.txt"               --> . means current directory  
find  "file2.txt"                           --> 
find  file2.txt
find . -size -10M file.txt 

----------------------------Day 5--------------------------------

whoami    -->gives user name

addUser-->sudo adduser Amit          or adduser Amit

chown student sample.txt    -->change ownsership
su student                  -->switch user
exit                  


//pipe command 
echo -e "line 1\n Line" >file1.txt
cat file1.txt | uniq -c 
cat file1.txt | sort

redirect

touch log.txt
ls >log.txt            -->Creates a detailed, long-format list of files in the log file.
cat log.txt

//background jobs
sleep 10 
bg --> give background jobs
Scrip files
-->run multiple commands  
nnano script.sh

----------------------------------------Day 6------------------------------------------------
name="Sumit"
echo my name is ${name}

read -p "enter name" pass
read -s -p "enter name" passSecure                                     -ps will not work 
echo pass $pass

grep -in "text" file.txt
grep -ni "text  file.txt          <-------- gives same result


#Conditions 
#LOOPS





