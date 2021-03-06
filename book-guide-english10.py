import tika
import re
from tika import parser
# from pdfrw import Pd
import pymongo
import operator
import json
def find_between( s, first, last ):
    try:
        start = s.index( first ) + len( first )
        end = s.index( last, start )
        return s[start:end]
    except ValueError:
        return ""

def toObject(arr):
    rv = {};
    for i in range(len(arr)):
        rv[i+1] = arr[i]
    return rv
                
def parse_text(filename,c_no,ty_pe,head):
    parsed_pdf = parser.from_file(filename)
    text = parsed_pdf['content'] 
    ch_no = int(c_no)
    final_result = ""
    if ty_pe == "grammar-solution":
        result =""
        obj = {}
        heading_arr = []
        question_arr = []
        answer_arr = []
        resultt = ""
        obj_1 = {}
        obj_2 = {}
        cnt = 1
        heading_list = ["His First Flight","The Night the Ghost Got in","Empowered Women Navigating The World","The Attic","Tech Bloomers","The Last Lesson","The Dying Detective"]
        heading = heading_list[ch_no-1]
        file_name = ""


        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""

        def toObject(arr):
                    rv = {};
                    for i in range(len(arr)):
                        rv[i+1] = arr[i]
                    return rv


        #remove url
        import re
        url_pattern = re.compile(r'https?://\S+|www\.\S+')
        text = url_pattern.sub(r'', text)

        input_text =  text

        #to remove unnecessary breaklines
        text = re.sub(r'(?<!\n)\n(?![\n\t])', ' ', text.replace('\r', ''))
        list1 = ['32','38','12','13','14','15']
        for i in list1:
            for j in range(40,0,-1):
                text = text.replace(str(j)+'/'+i, '')
        text = text.replace(' \n', '')
        
        pattern = r'[1-9]/[0-9][0-9]|[0-9]/[0-9]|[0-9][0-9]/[0-9][0-9]'
            # Match all digits in the string and replace them by empty string

        text = re.sub(pattern, '', text)

        text = text.replace('Answer:', '\nAnswer:')

        for i in range(50):
            text = text.replace('Question '+str(i)+'.', '\nQuestion '+str(i)+'.')

        for i in range(97,122):
            text = text.replace('Question '+chr(i)+'.', '\nQuestion '+chr(i)+'.')

        for i in range(97,122):
            text = text.replace(' '+chr(i)+'. ', '\n'+' '+chr(i)+'. ')

        text = text.replace('Additional Questions', '\nAdditional Questions\n')
        text = text.replace('Question And Answer', '\nQuestion And Answer')
        text = text.replace(heading, '\n'+heading)
        text = text.replace('10th Std English', '\n10th Std English')
        text = text.replace('Section', '\nSection')
        text = text.replace('Prose', '\nProse')
        text = text.replace('Warm up', '\nWarm up')
        text = text.replace('Vocabulary', '\nVocabulary')
        text = text.replace('Reading:', '\nReading:\n')
        text = text.replace('Writing', '\nWriting\n')
        text = text.replace('Writing:', '\nWriting:\n')
        text = text.replace('Listening Activity:', '\nListening Activity:\n')
        text = text.replace('Listening Activity', '\nListening Activity\n')
        text = text.replace('Speaking Activity', '\nSpeaking Activity\n')
        text = text.replace('Textbook Questions and Answers', '\nTextbook Questions and Answers\n')
        text = text.replace('Samacheer Kalvi', '\nSamacheer Kalvi\n')
        text = text.replace('10th English', '\n10th English')
        text = text.replace('Loading [MathJax]', '\nLoading [MathJax]')
        text = text.replace('Cancel replyYou must be logged in to post a comment.','\nCancel replyYou must be logged in to post a comment.')

        # j = 97
        for i in range(20):
            txt = str(i)+'.'
            text = text.replace('. '+txt, '. '+'\n'+txt)

        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['Samacheer Kalvi','Loading [MathJax]','Prose','1 ','2 ','3 ','Samacheer Guru','Prose Chapter','Homework Help Civics','Question Papers','Social Science','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books','6/17/2021',
                 'Multiply Fractions Calculator HCF LCM Calculator Factor Polynomials Calculator','Search','Skip to content',
                 'Search for','Model Question Papers','Recent Posts','10th English','Question And Answer','Question Answer',' '+heading,'Book Back','10th Std English']

        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            chapter_num = "Chapter - "+str(ch_no)
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)

        
        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info = file.read().rstrip('\n') 
            textbook_content = find_between(info,"Textual Questions","Hope that the above shaped information")
            arr = []
            result = ""
            cnt = 1
            head_arr = []
            ques_ans_arr = []
            ques_arr = []
            ans_arr = []
            contents = []

            grammar = []
            speaking = []
            reading = []
            vocabulary = []
            writing = []
            listening = []
            letter_writing = []
            affixes = []
            nominalisation = []

            vocabulary_contents = []
            grammar_contents = []
            speaking_contents = []
            reading_contents = []
            writing_contents = []
            listening_contents = []
            affixes = []
            letter_writing_contents = []
            affixes_contents = []
            nominalisation_contents = []

            if "Vocabulary" in textbook_content:
                print("Vocabulary")
            if "Reading" in textbook_content:
                print("Reading")
            if "Listening Activity" in textbook_content:
                print("Listening Activity")
            if "Writing" in textbook_content:
                print("Writing")
            if "Speaking Activity" in textbook_content:
                print("Speaking Activity")
            if "Grammar" in textbook_content:
                print("Grammar")

            #letter writing
            res = 'M. Exercise:'
            if res in textbook_content:
                letter_writing.append(i)
            nominalisation1 = ['G. Write the noun forms of the following words.','H. Complete the following sentences using the noun form of the words given in brackets.','I. Rewrite the sentences nominalising the underlined words. The first one has been done for you.','J. Combine the pairs of sentences given below’ into a single sentence using the noun form of the highlighted words.','K. Complete the sentences in the paragraph using the appropriate form of words given in brackets.','L. Identify the phrases in the following sentences and classify them as Adjective, Adverb or Noun phrases.']
            vocabulary1 = ['C. Change the parts of speech of the given words in the chart.','D. Read the following sentences and change the form of the underlined words as directed.','E. Use the following words to construct meaningful sentences on your own.','C. Look at the following expressions from the text. With the help of your teacher rewrite them in standard English. One has been done for you.','D. Complete the given tabular column with the suitable plural forms.','D. Pick out the idioms and phrases from the box and write them in the blanks equivalent to their meanings. One is done for you.','E. Read the given sentences carefully and fill in with appropriate phrasal verbs. Choose them from the help box.','F. Read the given passage carefully and fill in the blanks with suitable phrasal verbs from the help box.','Complete the following table with two more compound words.','C. Combine the words in column A with those in column B to form compound words as many as you can.','D. Form compound words from the boxes given below and fill in the blanks in the sentences that follow with the appropriate compound words.','C. Pick out the contractions from the lesson and expand them.','D. Expand the following abbreviations or acronyms','E. Given below are some idiomatic phrases. Find the meaning of it usingthe dictionary:','C. In column A are some of the idiomatic phrases from the essay. Match them with equivalent single words in column B:','D. Frame sentences of your own using the above idiomatic phrases.','E. Given below are some idiomatic phrases. Find the meaning of it using the dictionary:','C. Complete the following sentences by choosing the correct options given.','Use the given examples and make sentences of your own.  Commonly confused words','D. Complete the tabular column by finding the meaning of both the words given in the boxes. Use them in sentences of your own.']
            writing1 = ['I. Prepare attractive advertisements using the hints given below.','J. Write a report of the following events in about 100-120 words.','M. Write a speech for your school Literary Association celebration with the given lead.','J. Read the given slogans and match them appropriately with their theme.','K. Look at the images of familiar advertisements given below. Identify the products and try to frame your own slogans for each one of them.','L. Look at the pitcures given below and frame your own slogans:','Q. Prepare notice for the following:','R. Write an article for the following:','K. Fill in the missing words in this email.','L. Write an email to your teacher about the interesting English model that you have prepared for the literary fest.','M. Practice Exercise','N. Write about Your Favourite Sports person/ Famous personality/Hobby/ Recipe by starting your own blog.','I. Create posters for following:','J. Draft Letters for the following','I. Create a pamphlet for the following:','J. Write a letter of enquiry for the following']
            listening1 = ['E. Listen to the story and answer the question given below.','F. Here is a travelogue by the students of Government Girls Higher Secondary School, Pattukkottai after their trip to Darjeeling. Listen to the travelogue and answer the following questions.','E. Listen to the story and answer the following.','G. Listen to the passage read by the teacher and say whether the given statement is true or false.','Listen to the procedure to book online tickets carefully and fill in the blanks that follow. Listen to the recording twice.','N. Fill in the blanks :','F. Listen to the passage and state whether the statements are true (T), false (F) or no information (N)?','G. Listen to the passage again and answer the questions.','H. Complete the sentences after reading the passage.','F. Listen to the article titled “Remembering Nel Jayaraman”']
            grammar1 = ["Imagine you have been to Thanjavur recently. Based on your experience and the data given below about Thanjavur, suggest and guide your friend who wishes to visit Thanjavur and places nearby, using modals in your sentences.","B. Combine the pairs of sentences below into simple, complex and compound","A. Transform the following sentences as instructed.","G. Tick the correct sentences:","F. Fill in the blank with the correct alternative:","E. Replace the underlined words by a participle in the following sentences:","D. Identify the non-finites in the following sentences and underline them","C. Change the singular nouns to plurals by either adding ‘s’, ‘ies’, ‘es\ ‘ves","B. Fill in the blanks with the appropriate verb:","A. Fill in the blanks appropriately:","G. Tick the right choice (Indirect Speech).","F. Read the following dialogue and report it.","E. Read the different verb forms where they remain the same in the direct and indirect speech in the following cases. Fill in the blanks with missing indirect speech.","D. Join the sentences using ‘Relative Pronouns’.","C. Fill in the gaps with appropriate Pronouns.","B. Fill in the gaps with personal pronouns.","A. Write the words that can replace Ravi, Rani, woman, luggage and the dog when we use them for the second and subsequent times in the passage ……………….., ………………., and ………………. .","F. Rearrange the words in the correct order to make meaningful sentences.","E. Supply suitable linkers.","D. Tick the correct linker.","C. Combine the pairs of sentences using appropriate connectors.","B. Fill in the blanks with the connector that goes with the underlined words.","A. Complete the sentences given below choosing the right connectors given in brackets.","H. Read the situations given and frame two suitable sentences in the appropriate form of the tenses.","G. Read the story and rewrite it using the simple past tense.","F. The following passage has not been edited. There is one error in the tense of the verb in each line. Write the wrong word as well as the correct word in the given place. One is done for you.","E. In the following passage, some words are missing. Choose the correct words from the given options to complete the passage.","D. Underline the verbs and identify the tense forms.","C. Fill in the blanks using the verbs in the brackets in the future form.","B. Complete the sentences in past tense forms.","A. Complete the sentences in present tense forms.","E. Edit the following passage by replacing the underlined incorrect words with correct prepositional phrases.","D. Fill in the blanks by choosing the most appropriate prepositional phrase from the given options.","C. Refer to the dictionary to find out the meaning of the following prepositions and match them with the correct meaning.","B. Few articles are missing in the given passage. Edit the passage given below by adding suitable articles wherever necessary.","A. Na’garajan and Dhanalakshmi want to buy a new house. They have come to see a house for sale. Complete the conversation below by adding a, an or the.","E. Here are a few sentences already done for you. The clues given would be helpful to \make more sentences on your own.","D. Read the following dialogues and supply appropriate modals.","C. Read the dialogue and fill in the blanks with suitable modals.","A. Complete these sentences using appropriate modals. The clues in the brackets will help you.","B. Rewrite the following sentences by rectifying the errors in the use of modals."]
            speaking1 = ["F. Exercise","G. A road map is given below. Answer the questions that follow with the help of the road map. Work in pairs and discuss to give directions to get to one place from another.","I. Prepare on any one of the topics given below and present before your English teacher.","O. Given below are the various personalities from different fields. The topic of discussions is also given. Take roles and conduct a Mock Press Conference.","Mock Press Conference:","I. Develop a story with the given pictures and narrate it to your class. Your story must have a plot and vivid details.","H. Read the clues given below and develop your story. Narrate your story to the class.","Techniques and Presentation skills:","Story Telling:","G. Use this passage to play the game. You can collect information on other famous personalities and play too.","F. Quiz: Who am I ?","G. Here is a dialogue between a father and his daughter. Continue the dialogue with at least five utterances and use all the clues given above."]
            reading1 = ["H. State whether the given statements are true or false. If false correct the statements.","Read the story carefully and answer the questions asked below","H. Read the poem carefully and answer the questions that follow:","J. Read the comic strip and ans’ e following questions.","Read the following letter from a parent to her son’s coach and answer the questions given below:","I. Read the data below and answer the following questions.","K. State whether the following statements are true or false.","J. Look at the following situations the writer was in. He could have avoided the situation and saved himself. Glance through the write up again and comment on what the writer should have done in the following situations.","I. Suggesting titles.","H. Read the following incident carefully to answer the questions that follow.","H. Read the following passage and answer the questions that follow."]

            for i in range(len(speaking1)):
                if speaking1[i] in textbook_content:
                    speaking.append(speaking1[i])

            for i in range(len(reading1)):
                if reading1[i] in textbook_content:
                    reading.append(reading1[i])

            for i in range(len(nominalisation1)):
                if nominalisation1[i] in textbook_content:
                    nominalisation.append(nominalisation1[i])

            for i in range(len(writing1)):
                if writing1[i] in textbook_content:
                    writing.append(writing1[i])

            for i in range(len(listening1)):
                if listening1[i] in textbook_content:
                    listening.append(listening1[i])

            for i in range(len(vocabulary1)):
                if vocabulary1[i] in textbook_content:
                    vocabulary.append(vocabulary1[i])

            for i in range(len(grammar1)):
                if grammar1[i] in textbook_content:
                    grammar.append(grammar1[i])


            data = ["Vocabulary","Listening","Writing","Speaking","Grammar","Reading"]

            if "M. Write a speech for your school Literary Association celebration with the given lead." in textbook_content:
                data = ["Vocabulary","Listening Activity","M. Write a speech for your school Literary Association celebration with the given lead.","Speaking Activity","Grammar","Reading","Synonyms","Antonyms"]

            if "summary:" in textbook_content:
                data.append("summary:")
            if "Summary:" in textbook_content:
                data.append("Summary:")
            if "Active And Passive" in textbook_content:
                data.append("Active And Passive")
            if "About the Author" in textbook_content:
                data.append("About the Author")
            if "Nominalisation" in textbook_content:
                data.append("Nominalisation")
            if "Affixes" in textbook_content:
                data.append("Affixes")
            if "Letter Writing" in textbook_content:
                data.append("Letter Writing")

            out = list(sorted(data, key=lambda item: textbook_content.index(item)))


            for i in range(len(out)):
                if (i<len(out)-1):
                    res = out[i]+find_between(textbook_content,out[i],out[i+1])
                elif (i==len(out)-1):
                    res = out[i]+textbook_content.split(out[i])[1]
                contents.append(res)   

            for j in range(len(contents)):
                if "Vocabulary" in contents[j]:
                    vocabulary_out = list(sorted(vocabulary, key=lambda item: contents[j].index(item)))
                    for i in range(len(vocabulary_out)):
                        if (i<len(vocabulary_out)-1):
                            res = vocabulary_out[i]+find_between(contents[j],vocabulary_out[i],vocabulary_out[i+1])
                        elif (i==len(vocabulary_out)-1):
                            res = vocabulary_out[i]+contents[j].split(vocabulary_out[i])[1]
                        vocabulary_contents.append(res) 

                if "Listening" in contents[j]:
                    listening_out = list(sorted(listening, key=lambda item: contents[j].index(item)))
                    for i in range(len(listening_out)):
                        if (i<len(listening_out)-1):
                            res = listening_out[i]+find_between(contents[j],listening_out[i],listening_out[i+1])
                        elif (i==len(listening_out)-1):
                            res = listening_out[i]+contents[j].split(listening_out[i])[1]
                        res = res.replace("/2021","")
                        listening_contents.append(res) 

                if "Speaking" in contents[j]:
                    speaking_out = list(sorted(speaking, key=lambda item: contents[j].index(item)))
                    for i in range(len(speaking_out)):
                        if (i<len(speaking_out)-1):
                            res = speaking_out[i]+find_between(contents[j],speaking_out[i],speaking_out[i+1])
                        elif (i==len(speaking_out)-1):
                            res = speaking_out[i]+contents[j].split(speaking_out[i])[1]
                        speaking_contents.append(res) 

                if "Reading" in contents[j]:
                    reading_out = list(sorted(reading, key=lambda item: contents[j].index(item)))
                    for i in range(len(reading_out)):
                        if (i<len(reading_out)-1):
                            res = reading_out[i]+find_between(contents[j],reading_out[i],reading_out[i+1])
                        elif (i==len(reading_out)-1):
                            res = reading_out[i]+contents[j].split(reading_out[i])[1]
                        reading_contents.append(res)

                if "M. Write a speech for your school Literary Association celebration with the given lead." in contents[j]:      
                    writing_out = list(sorted(writing, key=lambda item: contents[j].index(item)))
                    for i in range(len(writing_out)):
                        if (i<len(writing_out)-1):
                            res = writing_out[i]+find_between(contents[j],writing_out[i],writing_out[i+1])
                        elif (i==len(writing_out)-1):
                            res = writing_out[i]+contents[j].split(writing_out[i])[1]
                        writing_contents.append(res) 

                if "M. Write a speech for your school Literary Association celebration with the given lead." not in contents[j]:      
                    if "Writing" in contents[j]:
                        writing_out = list(sorted(writing, key=lambda item: contents[j].index(item)))
                        for i in range(len(writing_out)):
                            if (i<len(writing_out)-1):
                                res = writing_out[i]+find_between(contents[j],writing_out[i],writing_out[i+1])
                            elif (i==len(writing_out)-1):
                                res = writing_out[i]+contents[j].split(writing_out[i])[1]
                            writing_contents.append(res) 

                if "Grammar" in contents[j]:
                    grammar_out = list(sorted(grammar, key=lambda item: contents[j].index(item)))
                    for i in range(len(grammar_out)):
                        if (i<len(grammar_out)-1):
                            res = grammar_out[i]+find_between(contents[j],grammar_out[i],grammar_out[i+1])
                        elif (i==len(grammar_out)-1):
                            res = grammar_out[i]+contents[j].split(grammar_out[i])[1]
                        grammar_contents.append(res) 

                if "Letter Writing" in contents[j]:
                    letter_writing_out = list(sorted(letter_writing, key=lambda item: contents[j].index(item)))
                    for i in range(len(letter_writing_out)):
                        if (i<len(letter_writing_out)-1):
                            res = letter_writing_out[i]+find_between(contents[j],letter_writing_out[i],letter_writing_out[i+1])
                        elif (i==len(letter_writing_out)-1):
                            res = letter_writing_out[i]+contents[j].split(letter_writing_out[i])[1]
                        letter_writing_contents.append(res) 

                if "Affixes" in contents[j]:
                    affixes_out = list(sorted(affixes, key=lambda item: contents[j].index(item)))
                    for i in range(len(affixes_out)):
                        if (i<len(affixes_out)-1):
                            res = affixes_out[i]+find_between(contents[j],affixes_out[i],affixes_out[i+1])
                        elif (i==len(affixes_out)-1):
                            res = affixes_out[i]+contents[j].split(affixes_out[i])[1]
                        affixes_contents.append(res)

                if "Nominalisation" in contents[j]:
                    nominalisation_out = list(sorted(nominalisation, key=lambda item: contents[j].index(item)))
                    for i in range(len(nominalisation_out)):
                        if (i<len(nominalisation_out)-1):
                            res = nominalisation_out[i]+find_between(contents[j],nominalisation_out[i],nominalisation_out[i+1])
                        elif (i==len(affixes_out)-1):
                            res = nominalisation_out[i]+contents[j].split(nominalisation_out[i])[1]
                        nominalisation_contents.append(res)

        
            result+="\nLesson Name: "+heading+"\n\nGrammar"
            for i in range(len(grammar_contents)): 
                grammar_contents[i] = grammar_contents[i].replace("Answers","Answers:")
                ques_arr = []
                ans_arr = []

            for i in range(len(grammar_contents)): 
                ques_arr = []
                ans_arr = []


                if "A. Transform the following sentences as instructed." in grammar_contents[i]:
                    count = 0
                    result+=grammar_out[i]
                    for k in range(10):
                        find_word = str(k+1)+". "
                        counter = grammar_contents[i].count(find_word)
                        count = count + counter
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")

                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(")")[0]+")"
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split(")")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            print(res)
                            res1 = res.split(")")[0]+")"
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split(")")[1]
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2


                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Combine the pairs of sentences below into simple, complex and compound" in grammar_contents[i]:
                    count = 0
                    result+="\n\n"+grammar_out[i]+"\n"
                    for k in range(10):
                        find_word = str(k+1)+". "
                        counter = grammar_contents[i].count(find_word)
                        count = count + counter
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['In spite of','Being intelligent,','I must get a visa to','I saw a wounded','The shops were']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            res2 = res2.replace("The Dying Detective by","")
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "A. Fill in the blanks appropriately:" in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Fill in the blanks with the appropriate verb:" in grammar_contents[i]:
                    count = 10
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "C. Change the singular nouns to plurals by either adding ‘s’, ‘ies’, ‘es\ ‘ves" in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "D. Identify the non-finites in the following sentences and underline them" in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['In spite of','Being intelligent,','I must get a visa to','I saw a wounded','The shops were']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("Answer:")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("Answer:")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "E. Replace the underlined words by a participle in the following sentences:" in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['In spite of','Being intelligent,','I must get a visa to','I saw a wounded','The shops were']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("Answer:")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("Answer:")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "F. Fill in the blank with the correct alternative:" in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "A. Write the words that can replace Ravi" in grammar_contents[i]:
                    passage = "It may be an image"
                    result+="\n\n"+grammar_out[i]+"\n"
                    result+="\n"+passage
                    gram = grammar_out[i].replace("A.","")
                    ques_arr = [gram,"These words are called ?"]
                    ans_arr = ["He, she, it and it.","Pronouns"]

                    obj[cnt] = {"heading":grammar_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "G. Tick the correct sentences:" in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "E. Read the different verb forms where they remain the same in the direct and indirect speech in the following cases. Fill in the blanks with missing indirect speech." in grammar_contents[i]:
                    count = 6
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "D. Join the sentences using ‘Relative Pronouns’." in grammar_contents[i]:
                    count = 7
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['I have a book which','Kavita is my teacher who','This is Varun whose','Most of her friends whom','Give me a pen which','I have sold the house which','Here is your watch which']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "C. Fill in the gaps with appropriate Pronouns." in grammar_contents[i]:
                    count = 12
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Fill in the gaps with personal pronouns." in grammar_contents[i]:
                    count = 25
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    result+="\nQuestion : "+gram_ques
                    result+="\nAnswers:"
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_ans,str(j+1)+".",str(j+2)+".")
                            ans_arr.append(res2)
                            result+=str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_ans.split(str(j+1)+".")[1]
                            ans_arr.append(res2) 
                            result+=str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":gram_ques,"answer":toObject(ans_arr)}
                    cnt+=1

                if "F. Read the following dialogue and report it." in grammar_contents[i]:
                    count = 15
                    dialog = ""
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram = grammar_contents[i].split("Answers:")[0]
                    gram_ques = gram.split("Is it all right?”")[1]
                    dialog = gram.split("Johnson asked")[0]
                    result+="\nDialog: "+dialog+"\n"
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    result+="\nQuestion : "+gram_ques
                    result+="\nAnswers:"
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+=str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+=str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"dialog":dialog,"question":gram_ques,"answer":toObject(ans_arr)}
                    cnt+=1

                if "G. Tick the right choice (Indirect Speech)." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "A. Complete the sentences given below choosing the right connectors given in brackets." in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Fill in the blanks with the connector that goes with the underlined words." in grammar_contents[i]:
                    count = 4
                    count1 = 3
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1

                    for j in range(count1):
                        if(j < count1-1):
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count1-1):
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "C. Combine the pairs of sentences using appropriate connectors." in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['Although','They checked the packet twice and','When','After','As']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "D. Tick the correct linker." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "F. The following passage has not been edited. There is one error in the tense of the verb in each line. Write the wrong word as well as the correct word in the given place. One is done for you." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "H. Read the situations given and frame two suitable sentences in the appropriate form of the tenses." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "A. Complete the sentences in present tense forms." in grammar_contents[i]:
                    count = 8
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Complete the sentences in past tense forms." in grammar_contents[i]:
                    count = 8
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "C. Fill in the blanks using the verbs in the brackets in the future form." in grammar_contents[i]:
                    count = 8
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "D. Underline the verbs and identify the tense forms." in grammar_contents[i]:
                    count = 5
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "E. In the following passage, some words are missing. Choose the correct words from the given options to complete the passage." in grammar_contents[i]:
                    count = 8
                    opt_arr = []
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram = grammar_contents[i].split("Answers:")[0]
                    gram_opt = gram.split("great painter in future.")[1] 
                    gram_ques = gram.split("(a)")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    result+="\nQuestion : "+gram_ques
                    count = 8 
                    al = 97
                    result +="\noptions: "
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_opt,"("+chr(j+al)+")","("+chr(j+al+1)+")")
                            opt_arr.append(res2)
                            result+=str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_opt.split("("+chr(j+al)+")")[1]
                            opt_arr.append(res2) 
                            result+=str(j+1)+" : "+res2

                    result+="\nAnswers : "
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+=str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+=str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":gram_ques,"option":toObject(opt_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "E. Supply suitable linkers." in grammar_contents[i]:
                    count = 3
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "G. Read the story and rewrite it using the simple past tense." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answer:")[0]
                    gram_ans = grammar_contents[i].split("Answer:")[1]
                    result+="\nQuestion "+gram_ques
                    result+="\nAnswer "+ gram_ans
                    ques_arr.append(gram_ques)
                    ans_arr.append(gram_ans)

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Few articles are missing in the given passage. Edit the passage given below by adding suitable articles wherever necessary." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answer:")[0]
                    gram_ans = grammar_contents[i].split("Answer:")[1]
                    result+="\nQuestion "+gram_ques
                    result+="\nAnswer "+ gram_ans
                    ques_arr.append(gram_ques)
                    ans_arr.append(gram_ans)

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "C. Refer to the dictionary to find out the meaning of the following prepositions and match them with the correct meaning." in grammar_contents[i]:
                    result+="\n\n"+grammar_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    obj[cnt] = {"heading":grammar_out[i],"question":res,"answer":res}
                    cnt+=1

                if "D. Fill in the blanks by choosing the most appropriate prepositional phrase from the given options." in grammar_contents[i]:
                    count = 10
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("Answer:")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("Answer:")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "E. Edit the following passage by replacing the underlined incorrect words with correct prepositional phrases." in grammar_contents[i]:
                    count = 7
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['According','In spite of','Because','Apart from','She gets on with everyone in spite','Due to','On account of']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            res2 = res2.replace("The Night the Ghost Got in","")                            
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "A. Na’garajan and Dhanalakshmi want to buy a new house. They have come to see a house for sale. Complete the conversation below by adding a, an or the." in grammar_contents[i]:
                    count = 19
                    al = 97
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    result+="\nQuestion : "+gram_ques
                    result+="\nAnswers : "
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_ans,"("+chr(j+al)+")","("+chr(j+al+1)+")")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_ans.split("("+chr(j+al)+")")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":gram_ques,"answer":toObject(ans_arr)}
                    cnt+=1

                if "A. Complete these sentences using appropriate modals. The clues in the brackets will help you." in grammar_contents[i]:
                    count = 10
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "C. Read the dialogue and fill in the blanks with suitable modals." in grammar_contents[i]:
                    count = 16
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    result+="\nQuestion : "+gram_ques
                    result+="\nAnswers : "
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+=str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+=str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":gram_ques,"answer":toObject(ans_arr)}
                    cnt+=1

                if "D. Read the following dialogues and supply appropriate modals." in grammar_contents[i]:
                    count = 8
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = grammar_contents[i].split("Answers:")[0]
                    gram_ans = grammar_contents[i].split("Answers:")[1]
                    result+="\nQuestion : "+gram_ques
                    result+="\nAnswers : "
                    for j in range(count):
                        if(j < count-1):
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res2)
                            result+=str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res2) 
                            result+=str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":gram_ques,"answer":toObject(ans_arr)}
                    cnt+=1

                if "E. Here are a few sentences already done for you. The clues given would be helpful to \make more sentences on your own." in grammar_contents[i]:
                    count = 10
                    count1 = 10
                    mytext = find_between(text,"E. Here are a few sentences already done for you. The clues given would be helpful to \make more sentences on your own.","Active And Passive:")
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    gram_ques = mytext.split("Answers:")[0]
                    gram_ans = mytext.split("Answers:")[1]
                    ans_arr.append("")
                    ans_arr.append("")
                    for j in range(count):
                        if(j < count-1):
                            res1 = find_between(gram_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                        elif(j  == count-1):
                            res1 = gram_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1

                    for j in range(2,count1):
                        if(j < count1-1):
                            res2 = find_between(gram_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.insert(j,res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count1-1):
                            res2 = gram_ans.split(str(j+1)+". ")[1]
                            ans_arr.insert(j,res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1

                if "B. Rewrite the following sentences by rectifying the errors in the use of modals." in grammar_contents[i]:
                    count = 10
                    result+="\n\n"+grammar_out[i]+"\n"
                    grammar_contents[i] = grammar_contents[i].replace(grammar_out[i],"")
                    mylist = ['Could','I will','Take an umbrella. It may','The magistrate ordered that he must','Make me a cup of tea, will','You must','You should','We used','Should I','Will the']
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(grammar_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = grammar_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(mylist[j])[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = mylist[j]+res.split(mylist[j])[1]
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    obj[cnt] = {"heading":grammar_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    cnt+=1
                    
            final_result = result
            
            data = {
                        "name": heading,
                        "chapter no": ch_no,
                        "Questions": obj
                    }
            json_object = json.dumps(data, ensure_ascii = False, indent=14)
            mng_db = myclient['contentsDB'] # Replace mongo db name
            collection_name = 'grammar' # Replace mongo db collection name
            db_cm = mng_db[collection_name]

    #         db_cm.remove()
            db_cm.insert_one(json.loads(json_object))

            # Query data
            db_cm.collection_name.find()
            
            return final_result



            



    
    elif ty_pe == "poem-solution":
        obj = {}
        heading_arr = []
        question_arr = []
        answer_arr = []
        resultt = ""
        result1=""
        obj_1 = {}
        obj_2 = {}
        glossary_heading = "Glossary:"
        summary_heading = "Summary of the poem"

        glossary_content = ""
        file_name = ""
        lessons = ['Life','The Grumble Family','I am Every Woman','The Ant and the Cricket','The Secret of the Machines','No Men Are Foreign','The House on Elm Street']
        heading = lessons[ch_no-1]
        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""

        def toObject(arr):
                rv = {};
                for i in range(len(arr)):
                    rv[i+1] = arr[i]
                return rv
            
        #remove url
        import re
        url_pattern = re.compile(r'https?://\S+|www\.\S+')
        text = url_pattern.sub(r'', text)

        #to remove unnecessary breaklines
        text = re.sub(r'(?<!\n)\n(?![\n\t])', ' ', text.replace('\r', ''))
        list1 = ['10','11','12','13','14','15']
        for i in list1:
            for j in range(0,15):
                text = text.replace(str(j)+'/'+i, '')
        text = text.replace(' \n', '')
        text = text.replace('Answer:', '\nAnswer:')
        text = text.replace('Answers:', '\nAnswer:')
        text = text.replace('Section', '\nSection')
        text = text.replace('Question', '\nQuestion')
        text = text.replace('brackets:', 'brackets.')
        text = text.replace('Questions and Answers', '\nQuestions and Answers\n')

        # j = 97
        for i in range(20):
            txt = str(i)+'.'
            text = text.replace('. '+txt, '. '+'\n'+txt)

        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['Samacheer Kalvi','Homework Help Civics','Tamil Nadu','Question Papers','Social Science','Multiply Fractions Calculator HCF LCM Calculator Factor Polynomials Calculator','Questions and Answers','10th English','Search','Skip to content','Search for','Model Question Papers','Leave a Reply Cancel replyYou must be logged in to post a comment.' ,'Recent Posts','Mobile Menu' ]
        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            chapter_num = "Chapter - "+str(ch_no)
            newfile.write(chapter_num+"\n")
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)
        count = 0
        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info1 = file.read().rstrip('\n')

            res = find_between(info1,"C.",heading+" "+"Summary of the poem")
            c_part = "C."+res
            c_head = find_between(info1,"C.",".")
            c_part_heading = "C. "+c_head
            c_q_arr = ["(I) Personification","(II) Alliteration","(III) Assonance","(IV) Hyperbole"]
            c_a_arr = ["We can pull and haul and push and lift and drive. Here the human attributes are given to the machines.","(a) We can print and plough and weave and heat and light.Here the alliterated words are ‘print, plough’. (b) We can run and race and swim and fly and dive The alliterated words are ‘run, race’ (c) But remember, please, the law by which we live the words “Law, live; which, we” are alliterated. (d) We can neither love nor pity nor forgive. The alliterated words in this line are: “neither, nor”","Some water, coal, and oil are all we ask.The words ‘all, ask’ are in assonance.","We will serve you four and twenty hours a day! The figure of speech used here is hyperbole."]
            start = "A."
            end = heading+" "+"Summary of the poem"
            info = start+find_between(info1,start,end)
            find_word = ['A.','B.','C.','D.','E.','F.','G.']
            all_words = info.split() 
            for word in find_word:
                count_occurrences = all_words.count(word)  
                count = count+count_occurrences 


            k=65
            arr = []
            text_to_remove = find_between(info1,"Additional","B.")
            info = info.replace("Additional"+text_to_remove,"")
            text_to_remove = find_between(info1,"Poetic Appreciation:","B.")
            info = info.replace("Poetic Appreciation:"+text_to_remove,"")
            for i in range(count):
                if(i<count-1):
                    start = chr(i+k)+". "
                    end = chr(i+k+1)+". "
                    result = start+find_between(info, start, end)
                    arr.append(result)

                elif(i==count-1):
                    start = chr(i+k)+"."
                    result = info.split(start)[1]
                    arr.append(start+result)

            al = 65            
            for i in range(len(arr)):
                result = find_between(arr[i], chr(al+i)+".", ".")
                if (result==""):
                    result = find_between(arr[i], chr(al+i)+".", ":")
                result = result.replace("\nQuestion 1.:","")
                heading_arr.append(chr(al+i)+"."+result+ ".")


            for j in range(len(arr)):
                ques_arr = []
                ans_arr = []
                count=0

                result1 += "\n"+heading_arr[j]+"\n"
                find_word = ['Answer:']
                all_words = arr[j].split() 
                for word in find_word:
                    count_occurrences = all_words.count(word)  
                    count = count+count_occurrences
                    for i in range(count):
                        arr[j] = arr[j].replace(heading_arr[j],"")
                        if(i<count-1):
                            start = "Question "+str(i+1)+". "
                            end = "Answer:"
                            result = find_between(arr[j], start, end)
                            if(result==""):
                                start = str(i+1)+". "
                                end = "Answer:"
                                result = find_between(arr[j], start, end)
                                if(result==""):
                                    result = "It may be an image"
                            arr[j] = arr[j].replace(start+result,"")
                            result1+= "\nQuestion : "+result
                            ques_arr.append(result)
                            question_arr.append(result)

                            start = "Answer:"
                            end = "Question "+str(i+2)+"."
                            result = find_between(arr[j], start, end)
                            if(result==""):
                                start = "Answer:"
                                end = str(i+2)+"."
                                result = find_between(arr[j], start, end)
                            result = result.replace("Answer:","")
                            arr[j] = arr[j].replace(result,"") 
                            ans_arr.append(result)
                            result1+= "\nAnswer : "+result
                            answer_arr.append(result)


                        elif(i==count-1):
                            start = " Question "+str(i+1)+". "
                            end = "Answer:"
                            resultt = find_between(arr[j], start, end)
                            if(resultt==""):
                                start = str(i+1)+". "
                                end = "Answer:"
                                resultt = find_between(arr[j], start, end)
                                if(resultt==""):
                                    resultt = arr[j].partition("Answer:")[0]
        #                                 if(result==heading_arr[j] or result==""):
        #                                     result = "It may be an image"
        #                                 else:
        #                                     result = result.replace(heading_arr[j],"")  

                            arr[j] = arr[j].replace(start+resultt,"") 
                            result1+= "\nQuestion : "+resultt
                            ques_arr.append(resultt)
                            question_arr.append(resultt)
                            start = "Answer:"
                            result = arr[j].split(start)[1]
                            result = result.replace("Answer:","")
                            result = result.replace("Question","")
                            arr[j] = arr[j].replace("Answer:","")
                            arr[j] = arr[j].replace("Question","")
                            arr[j] = arr[j].replace(start+result,"")
                            if (count==1):
                                ans_arr.append(result)
                                result1+= "\nAnswer : "+result
                                answer_arr.append(result)
                            else:
                                ans_arr.append(arr[j])
                                result1+= "\nAnswer : "+arr[j]
                                answer_arr.append(arr[j])
                            obj[str(j+1)] = {"heading":heading_arr[j],"question":toObject(ques_arr),"answer":toObject(ans_arr)}

            if (heading=="The Secret of the Machines"):
                obj[str(j+1)] = {"heading":c_part_heading,"question":toObject(c_q_arr),"answer":toObject(c_a_arr)}


            if ("Glossary:" in info1):
                glossary_content = find_between(info1,glossary_heading,"Posted in Class")
                summary_content1 = find_between(info1,summary_heading,glossary_heading)
                pattern = r'[0-9]'
                summary_content1 = re.sub(pattern, '', summary_content1) 
                glossary_content = re.sub(pattern, '', glossary_content)
                result1 += "\n\nSummary of the poem:\n"
                result1 += "\n"+summary_content1
                result1 += "\n\nGlossary:\n"
                result1 += "\n"+glossary_content
                obj_1= {"heading":heading+" "+summary_heading,"question":"","answer":summary_content1}
                obj_2= {"heading":glossary_heading,"question":"","answer":glossary_content}
                data = {
                  "name": heading,
                  "chapter no": chapter_num,
                  "questions": obj,
                  "summary":obj_1,
                  "glossary":obj_2
                }
            else:

                summary_content2 = find_between(info1,heading+" "+summary_heading,"Posted in Class")
                pattern = r'[0-9]'
                summary_content2 = re.sub(pattern, '', summary_content2) 
                result1 += "\n\nSummary of the poem:\n"
                result1 += "\n"+summary_content2 
                obj_1= {"heading":heading+" "+summary_heading,"question":"","answer":summary_content2}
                data = {
                  "chapter no": chapter_num,
                  "questions": obj,
                  "summary":obj_1
                }
            
            json_object = json.dumps(data, ensure_ascii=False, indent=4)
            
           
            mng_db = myclient['contentsDB'] # Replace mongo db name
            collection_name = 'poem-guide' # Replace mongo db collection name
            db_cm = mng_db[collection_name]

    #         db_cm.remove()
            db_cm.insert_one(json.loads(json_object))

            # Query data
            db_cm.collection_name.find()
        #     mng_client = pymongo.MongoClient('localhost', 27017)
        #     mng_db = mng_client['solutions-guide'] # Replace mongo db name
        #     collection_name = 'poem' # Replace mongo db collection name
        #     db_cm = mng_db[collection_name]

        #     db_cm.insert(json.loads(json_object))


            file_name = "Chapter_"+str(ch_no)+"_poem_solution.json"
            with open(file_name, 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            final_result = result1
            
            return final_result
    
    elif ty_pe == "prose-solution": 
        result = ""
        between_head_content = []
        each_content = []
        short_para_content = ""
        question_arr = []
        answer_arr = []
        headings = []
        ques = {}
        q_arr = []
        an_arr =[]
        excercise = []
        intext_content=""
        obj = {}
        resultt = ""
        types = "Prose"
        heading_list = ["His First Flight","The Night the Ghost Got in","Empowered Women Navigating The World","The Attic","Tech Bloomers","The Last Lesson","The Dying Detective"]
        heading = heading_list[ch_no-1]
        file_name = ""


        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""

        def toObject(arr):
                    rv = {};
                    for i in range(len(arr)):
                        rv[i+1] = arr[i]
                    return rv
        #remove url
        import re
        url_pattern = re.compile(r'https?://\S+|www\.\S+')
        text = url_pattern.sub(r'', text)

        input_text =  text

        #to remove unnecessary breaklines
        text = re.sub(r'(?<!\n)\n(?![\n\t])', ' ', text.replace('\r', ''))
        list1 = ['32','38','12','13','14','15']
        for i in list1:
            for j in range(40,0,-1):
                text = text.replace(str(j)+'/'+i, '')
        text = text.replace(' \n', '')

        text = text.replace('Answer:', '\nAnswer:')

        pattern = r'[1-9]/[0-9][0-9]|[0-9]/[0-9]|[0-9][0-9]/[0-9][0-9]'
            # Match all digits in the string and replace them by empty string
        text = re.sub(pattern, '', text)

        for i in range(50):
            text = text.replace('Question '+str(i)+'.', '\nQuestion '+str(i)+'.')

        for i in range(97,122):
            text = text.replace('Question '+chr(i)+'.', '\nQuestion '+chr(i)+'.')

        for i in range(97,122):
            text = text.replace(' '+chr(i)+'. ', '\n'+' '+chr(i)+'. ')

        text = text.replace('Additional Questions', '\nAdditional Questions\n')
        text = text.replace('Question And Answer', '\nQuestion And Answer')
        text = text.replace(heading, '\n'+heading)
        text = text.replace('10th Std English', '\n10th Std English')
        text = text.replace('Section', '\nSection')
        text = text.replace('Prose', '\nProse')
        text = text.replace('Warm up', '\nWarm up')
        text = text.replace('Vocabulary', '\nVocabulary')
        text = text.replace('Reading:', '\nReading:\n')
        text = text.replace('Writing', '\nWriting\n')
        text = text.replace('Writing:', '\nWriting:\n')
        text = text.replace('Listening Activity:', '\nListening Activity:\n')
        text = text.replace('Listening Activity', '\nListening Activity\n')
        text = text.replace('Speaking Activity', '\nSpeaking Activity\n')
        text = text.replace('Textbook Questions and Answers', '\nTextbook Questions and Answers\n')
        text = text.replace('Samacheer Kalvi', '\nSamacheer Kalvi\n')
        text = text.replace('10th English', '\n10th English')
        text = text.replace('Loading [MathJax]', '\nLoading [MathJax]')
        text = text.replace('Cancel replyYou must be logged in to post a comment.','\nCancel replyYou must be logged in to post a comment.')



        # j = 97
        for i in range(20):
            txt = str(i)+'.'
            text = text.replace('. '+txt, '. '+'\n'+txt)

        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['Samacheer Kalvi','Loading [MathJax]','Prose','1 ','2 ','3 ','Samacheer Guru','Prose Chapter','Homework Help Civics','Question Papers','Social Science','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books','6/17/2021',
                 'Multiply Fractions Calculator HCF LCM Calculator Factor Polynomials Calculator','Search','Skip to content',
                 'Search for','Model Question Papers','Recent Posts','10th English','Question And Answer','Question Answer',' '+heading,'Book Back','10th Std English']

        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            chapter_num = "Chapter - "+str(ch_no)
            newfile.write(chapter_num+"\n")
            type_ = types+" - "+heading
            newfile.write(type_+"\n")
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)


        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info = file.read().rstrip('\n') 
            textbook_content = find_between(info,"Textual Questions","Hope that the above shaped information")
            arr = []
            result = ""
            head_arr = []
            ques_ans_arr = []
            ques_arr = []
            ans_arr = []
            content=""
            remove_list = ["Get your idea online.","10th Samacheer","English Guide","10th Standard English","10th Books","in.godaddy.com Shop Now","Book A Free 60-minute Trial Choose From The Best Educators And Unleash Your Child's True  Potential.","vedantu.com OPEN","/2021","10 Std English Guide","10th Standard English Guide","English Guide For Class 10"," Pdf","10 Std English","Guru","10th Samacheer English Guide","His First Flight Story In Tamil Pdf","Tenth English Guide","/2021"]
            for i in remove_list:
                info = info.replace(i,"")
                
            pattern = r'[1-9]/[0-9][0-9]|[0-9]/[0-9]|[0-9][0-9]/[0-9][0-9]'
            # Match all digits in the string and replace them by empty string
            info = re.sub(pattern, '', info)
            
            

            #TextBook Questions And Answers
            textbook_content = find_between(info,"Textual Questions","Hope that the above shaped information")

            intext_content = find_between(info,"InText Questions","Textual Questions")
            intext_list = ["Pdf","Class 10","English Chapter 6","Questions And Answers","Guru","Summary Pdf","English Guide For Class 10","Loading [MathJax]/extensions/MathMenu.js","Loading [MathJax]/extensions/MathZoom.js",heading]
            for i in intext_list:
                intext_content = intext_content.replace(i,"")
            if (intext_content==""):
                intext_content = find_between(info,"Intext Questions","Textual Questions")
                for i in intext_list:
                    intext_content = intext_content.replace(i,"")

            cnt = 1
            count1=0  
            find_word = 'Answer:'
            counter = intext_content.count(find_word)
            count1 = count1 + counter
            al = 97
            for i in range(count1):
                if(i<count1-1):
                    if "Question (a)." in intext_content:
                        res = "Question ("+chr(al+i)+"). " + find_between(intext_content,"Question ("+chr(al+i)+"). ","Question ("+chr(al+i+1)+"). ")
                        question = find_between(res,"Question ("+chr(al+i)+"). ","Answer:")
                        res1 = res.replace("Question ("+chr(al+i)+"). "+question,"")

                    elif "Question a." in intext_content:
                        res = "Question "+chr(al+i)+". " + find_between(intext_content,"Question "+chr(al+i)+". ","Question "+chr(al+i+1)+". ")
                        question = find_between(res,"Question "+chr(al+i)+". ","Answer:") 
                        res1 = res.replace("Question "+chr(al+i)+". "+question,"")

                    elif "Question 1." in intext_content:
                        res = "Question "+str(i+1)+". " + find_between(intext_content,"Question "+str(i+1)+". ","Question "+str(i+2)+". ")
                        question = find_between(res,"Question "+str(i+1)+". ","Answer:")
                        res1 = res.replace("Question "+str(i+1)+". "+question,"")

                    elif " a. "and " b. " in intext_content:  
                        res = " "+chr(al+i)+". " +  find_between(intext_content," "+chr(al+i)+". "," "+chr(al+i+1)+". ")
                        question = find_between(res," "+chr(al+i)+". ","Answer:")
                        res1 = res.replace(" "+chr(al+i)+". "+question,"")

                    elif "a. "and "b. " in intext_content:  
                        res = chr(al+i)+". " +  find_between(intext_content,chr(al+i)+". ",chr(al+i+1)+". ")
                        question = find_between(res,chr(al+i)+". ","Answer:")
                        res1 = res.replace(chr(al+i)+". "+question,"")
                    res1 = res1.replace("Answer:","")


                    res1 = res1.replace("The narrator’s neighbors were a retired engraver named Bodwell and his wife.\ne. How did the Bodwells react, when a shoe was thrown into their house?  \n  ","")
                    question = question.replace("They saw nothing, but only heard the steps.\nd. Who were the narrator neighbors?","How did the Bodwells react, when a shoe was thrown into their house? ")
                    question = question.replace("Wiyat","What")

                    question = question.replace("Why was the attic ‘a favourite place’ for the children? \n","Why did Sanyal recite the poem in the tea shop earlier? \n")
                    question = question.replace("But he never failed to pay for it. This shows that he had a sense of self-respect.\nl. Why was the attic’a favourite place for the children?  ","Why did Sanyal recite the poem in the tea shop earlier? ")
                    question = question.replace("\n","")
                    ques_arr.append(question)
                    res1 = res1.replace("The attic had been a favourite place for the children because it was in the attic the children seemed to be in a world of their own.\nm. What did Aditya do on reaching the attic?  \n  He searched for an article and found it on top of the packing case in the attic.\nn. What did the jeweller say about the article?  \n  The jeweller said that it was an antique.\no. Was Sanyal happy about his visitors?  \n  No, he was not happy about his visitors.\n \np. Why did Sanyal recite the poem in the tea shop earlier?  \n  Sanyal recited the poem in the tea shop in order to make Aditya remember the incidents on the prize-giving day. He recited the same poem that he had recited on the prize-giving day.","Sanyal recited the poem in the tea shop in order to make Aditya remember the incidents on the prize-giving day. He recited the same poem that he had recited on the prize-giving day.")

                    res1 = res1.replace("Question\n","")
                    res1 = res1.replace("\n Summary","")
                    res1 = res1.replace("Story In Tamil \n","")
                    res1 = res1.replace("\n","")
                    res1 = res1.replace("10th English Solutions","")
                    res1 = res1.replace("English Guide 10th","")
                    res1 = res1.replace("English Guide For","")
                    res1 = res1.replace("English 10th Guide","")



                    res1 = res1.replace("The attic had been a favourite place for the children because it was in the attic the children seemed to be in a world of their own.m. What did Aditya do on reaching the attic?    He searched for an article and found it on top of the packing case in the attic.n. What did the jeweller say about the article?    The jeweller said that it was an antique.o. Was Sanyal happy about his visitors?    No, he was not happy about his visitors. p. Why did Sanyal recite the poem in the tea shop earlier?    Sanyal recited the poem in the tea shop in order to make Aditya remember the incidents on the prize-giving day. He recited the same poem that he had recited on the prize-giving day.","Sanyal recited the poem in the tea shop in order to make Aditya remember the incidents on the prize-giving day. He recited the same poem that he had recited on the prize-giving day.")
                    my_list = ['10th Lesson ','10th English Unit 5 ','10th English Guide','10th English',"Get your idea online.in.godaddy.com Shop Now ","Book A Free 60-minute Trial Choose From The Best Educators And Unleash Your Child's True  Potential.vedantu.com OPEN"]
                    for i in my_list:
                        res1 = res1.replace(i,"")
                    ans_arr.append(res1)

                elif(i==count1-1):
                    if "Question (a)." in intext_content:
                        res = "Question ("+chr(al+i)+"). "+ intext_content.split("Question ("+chr(al+i)+"). ")[1]
                        question = find_between(res,"Question ("+chr(al+i)+"). ","Answer:")
                        res1 = res.replace("Question ("+chr(al+i)+"). "+question,"")

                    elif "Question a." in intext_content:
                        res = "Question "+chr(al+i)+". " + intext_content.split("Question "+chr(al+i)+". ")[1]
                        question = find_between(res,"Question "+chr(al+i)+". ","Answer:") 
                        res1 = res.replace("Question "+chr(al+i)+". "+question,"")

                    elif "Question 1." in intext_content:  
                        res = "Question "+str(i+1)+". " + intext_content.split("Question "+str(i+1)+". ")[1]
                        question = find_between(res,"Question "+str(i+1)+". ","Answer:")
                        res1 = res.replace("Question "+str(i+1)+". "+question,"")

                    elif " a. "and " b. " in intext_content:  
                        res = " "+chr(al+i)+". " + intext_content.split(" "+chr(al+i)+". ")[1]
                        question = find_between(res," "+chr(al+i)+". ","Answer:")
                        res1 = res.replace(" "+chr(al+i)+". "+question,"")

                    elif "a. "and "b. " in intext_content:  
                        res = chr(al+i)+". " + intext_content.split(chr(al+i)+". ")[1]
                        question = find_between(res,chr(al+i)+". ","Answer:")
                        res1 = res.replace(chr(al+i)+". "+question,"")
                    res1 = res1.replace("Answer:","")
                    res1 = res1.replace("\nQuestion\n","")
                    question = question.replace("\n","")
                    question = question.replace("Book A Free 60-minute Trial Choose From The Best Educators And Unleash Your Child's True  Potential.vedantu.com OPEN","")
                    ques_arr.append(question)
                    res1 = res1.replace("\n","")
                    res1 = res1.replace("Get your idea online.in.godaddy.com Shop Now","")
                    ans_arr.append(res1)

            result += "\nIntext Questions:\n"
            for i in range(len(ques_arr)):
                result += "\nQuestion "+str(i+1)+" : "+ques_arr[i]+"\n"
                result += "Answer "+str(i+1)+" : "+ ans_arr[i]+"\n"
                

            intext_obj = {}
            intext_obj["Intext Questions"] = { "heading":"Intext questions","question":toObject(ques_arr),"answer":toObject(ans_arr)}
            obj[cnt] = intext_obj
            cnt = cnt + 1

            multi_cnt = 1
            multi_obj = {}
            short_para_content = find_between(info,"Textual Questions","Vocabulary:")
            short_para_content = short_para_content.replace("How was the last lesson different from earlier lessons?","How was the last lesson different from earlier lessons? \nAnswer:")

            if (ch_no == 3):
                short_para_content = find_between(input_text,"Textual Questions","Vocabulary")
                short_para_content = short_para_content.replace("circumnavigation.  True.","circumnavigation. \nAnswer: True.")

                my_list=['\n','Empowered Women Navigating The World – Samacheer Guru','Solutions','Prose Chapter 3','6/17/2021','10th Samacheer','10th Books','10th English ','For Class 10 Pdf','10th Standard English','10th Class','Loading [MathJax]/extensions/MathMenu.js','Samacheer Kalvi', 'English Guide','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books']
                for i in my_list:
                    short_para_content = short_para_content.replace(i,"")

                short_para_content = short_para_content.replace("How many applied to be shortlisted to six members of the crew?  Thirty women applied for six of them to be shortlisted, as members of the crew.","How many applied to be shortlisted to six members of the crew?  Answer: Thirty women applied for six of them to be shortlisted, as members of the crew.")
                short_para_content = short_para_content.replace("What did they do when they witnessed something new in their journey?  As they were not specialists, whenever they spotted something new in the sea, they googled and browsed information to learn more about the species.","What did they do when they witnessed something new in their journey?  Answer: As they were not specialists, whenever they spotted something new in the sea, they googled and browsed information to learn more about the species.")


            if (ch_no == 4):
                short_para_content = find_between(input_text,"Textual Questions","Vocabulary:")
                short_para_content = short_para_content.replace("Prose7.","Question 7.")
                my_list=['\n','Unit 4','Solutions' ,'Chapter 4','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books','The Attic Story 10th Standard','10th English Unit 4 Attic','Prose','10th English Question Answer','The Attic 10th','The Attic Story 10th Standard','The Attic Story Moral','The Attic Lesson','10th English', 'The Attic Questions And Answers','10th English Question Answer','The Attic Story','The Attic By Satyajit Ray Questions Answers','10th English Unit 4 ','6/17/2021','Samacheer Kalvi','10th English Solutions','Prose Chapter 4','The Attic – Samacheer Guru','The Attic','Attic',' English ']
                for i in my_list:
                    short_para_content = short_para_content.replace(i,"")

            if (ch_no == 5):
                short_para_content = find_between(input_text,"Textual Questions","Vocabulary")
                my_list = ['\n','10th English Solutions ','English Chapter 5 ','Expand The Theme 10th Class ','10th Class English 5th Unit ','Loading [MathJax]/extensions/MathZoom.js','5th Standard English ','Guru English 10th ','6/17/2021','Samacheer Kalvi','  Solutions','Prose Chapter 5','Tech Bloomers – Samacheer Guru','Samacheer Guru','10th English' ]
                for i in my_list:
                    short_para_content = short_para_content.replace(i,"")

            short_para_list = ['Loading [MathJax]/extensions/MathZoom.js']
            for i in short_para_list:
                short_para_content = short_para_content.replace(i,"")
            if(short_para_content == ""):
                short_para_content = find_between(info,"Textual Questions","Vocabulary")
                for i in short_para_list:
                    short_para_content = short_para_content.replace(i,"")
                    
            pattern = r'[1-9]/[0-9][0-9]|[0-9]/[0-9]|[0-9][0-9]/[0-9][0-9]'
            # Match all digits in the string and replace them by empty string

            short_para_content = re.sub(pattern, '', short_para_content)
            
            count=0
            alp = 65
            for i in range(26):
                if i == 12:
                    short_para_content.replace(" "+chr(alp+i)+"."+" "," "+chr(alp+i)+"."+" ")
                else:
                    short_para_content.replace(" "+chr(alp+i)+"."+" ","\n"+chr(alp+i)+"."+" ")
                if (alp+i) != 77:
                    find_word = chr(alp+i)+". "
                    split_head = find_word
                    counter = short_para_content.count(find_word)
                    count = count + counter



            for i in range(count):
                if(i<count-1):
                    res = chr(alp+i)+". "+find_between(short_para_content,chr(alp+i)+". ",chr(alp+i+1)+". ")
                    if(res==""):
                        res = chr(alp+i)+". "+find_between(short_para_content,"Answer the following questions in two or three sentences.",chr(alp+i+1)+". ")
                    arr.append(res)
                elif(i==count-1):
                    arr.append(chr(alp+i)+". "+short_para_content.split(chr(alp+i)+". ")[1])


            for j in range(count):
                ques_arr = []
                ans_arr = []
                if "Additional" in arr[j]:
                    res1 = find_between(arr[j],chr(alp+j)+". ","Additional")
                    if(res1==""):
                        res1 = find_between(arr[j],chr(alp+j)+". ","Additional")
                    res = find_between(arr[j],chr(alp+j)+". ","Question 1.")
                    head_list = {"10th English Solutions","\n","10th English","Solutions","The Night The Ghost Got In","Questions And Answers"}
                    for i in head_list:
                        res = res.replace(i,"")
                    head_arr.append(res)
                    count1=0  
                    find_word = 'Answer:'
                    counter = res1.count(find_word)
                    count1 = count1 + counter
                    for i in range(count1):
                        if(i<count1-1):
                            my_list = ["Text Dependent Questions Answer Key","10th English The Night The Ghost Got In",'The Night The Ghost Got In Pdf','The Night The Ghost Got In Characters','The Night The Ghost Got In Moral','The Night The Ghost Got In','The Night Ghost Got In','Pdf Download ','Guru 10th English','10th English Guide','10th English Solutions','10th Samacheer English Guide','10th English Solutions','10th English Unit','English 10th Guide','English 10th Guide','Tenth English Guide','10 Std English Guide','His First Flight Story In Tamil Pdf','10th English Book Solutions ','10th English Book Answers','Guru 0th English','10 Std English','10th EnglishHis First Flight','English Guide For Class 10  Pdf','10th English Guide Pdf Download','10th Standard English Guide','10 Std English Guide','English 10th Guide','10th English Book']
                            res = "Question "+str(i+1)+". " + find_between(res1,"Question "+str(i+1)+". ","Question "+str(i+2)+". ")
        #                         print("result "+str(i+1),res)
                            res = res.replace("\n","")
                            ques_arr.append(find_between(res,"Question "+str(i+1)+". ","Answer:"))
                            res = res.replace("Question "+str(i+1)+". "+ques_arr[i],"")
                            res = res.replace("Answer:","")
                            short_list1 = [" \n10th English Solutions \n","His First Flight","10 Std English Guide \n","Answers ","\nThe Night The Ghost Got In ","\nThe Night The Ghost Got In Answers ","\nThe Night The Ghost Got In Moral "]
                            for i in short_list1:
                                res = res.replace(i,"")
                            for i in my_list:
                                res = res.replace(i,"")
                            res = res.replace("\n","")
                            ans_arr.append(res)

                        elif(i==count1-1):
                            my_list = ["Text Dependent Questions Answer Key","10th English The Night The Ghost Got In",'The Night The Ghost Got In Pdf','The Night The Ghost Got In Characters','The Night The Ghost Got In Moral','The Night The Ghost Got In','The Night Ghost Got In','Pdf Download ','Guru 10th English','10th English Guide','10th English Solutions','10th Samacheer English Guide','10th English Solutions','10th English Unit','English 10th Guide','English 10th Guide','Tenth English Guide','10 Std English Guide','His First Flight Story In Tamil Pdf','10th English Book Solutions ','10th English Book Answers','Guru 0th English','10 Std English','10th EnglishHis First Flight','English Guide For Class 10  Pdf','10th English Guide Pdf Download','10th Standard English Guide','10 Std English Guide','English 10th Guide','10th English Book']
                            res = "Question "+str(i+1)+". " + res1.split("Question "+str(i+1)+". ")[1]
        #                         print("result "+str(i+1),res)
                            res = res.replace("\n","")
                            ques_arr.append(find_between(res,"Question "+str(i+1)+". ","Answer:"))
                            res = res.replace("Question "+str(i+1)+". "+ques_arr[i],"")
                            res = res.replace("Answer:","")
                            res = res.replace(". Additional","")
                            for i in my_list:
                                res = res.replace(i,"")
                            res = res.replace("\n","")
                            ans_arr.append(res)


                    res2 = arr[j].split("Additional")[1]
                    count=0  
                    find_word = 'Answer:'
                    counter = res2.count(find_word)
                    count = count + counter
                    for i in range(count):
                        if(i<count-1):
                            my_list = ["Text Dependent Questions Answer Key","10th English The Night The Ghost Got In",'The Night The Ghost Got In Pdf','The Night The Ghost Got In Characters','The Night The Ghost Got In Moral','The Night The Ghost Got In','The Night Ghost Got In','Pdf Download ','Guru 10th English','10th English Guide','10th English Solutions','10th Samacheer English Guide','10th English Solutions','10th English Unit','English 10th Guide','English 10th Guide','Tenth English Guide','10 Std English Guide','His First Flight Story In Tamil Pdf','10th English Book Solutions ','10th English Book Answers','Guru 0th English','10 Std English','10th EnglishHis First Flight','English Guide For Class 10  Pdf','10th English Guide Pdf Download','10th Standard English Guide','10 Std English Guide','English 10th Guide','10th English Book']
                            res = "Question "+str(i+1)+". " + find_between(res2,"Question "+str(i+1)+". ","Question "+str(i+2)+". ")
        #                         print("result "+str(i+1),res)
                            res = res.replace("\n","")
                            res = res.replace("Do you think all young birds are afraid to make their first flight, or are some birdsBook A Free 60-minute Trial Choose From The Best Educators And Unleash Your Child's True  Potential.vedantu.com OPEN 10th English Solutions more timid than others? Do you think a human baby also finds it a challenge to take its first steps?","Do you think all young birds are afraid to make their first flight, or are some birds more timid than others? Do you think a human baby also finds it a challenge to take its first steps?")
                            ques_arr.append(find_between(res,"Question "+str(i+1)+". ","Answer:"))
                            res = res.replace("Question "+str(i+1)+". "+ques_arr[i+count1],"")
                            res = res.replace("Answer:","")
                            short_list = ["\nThe Night Ghost Got In ","\nThe Night The Ghost Got In Pdf ","\nThe Night The Ghost Got In Characters","\nThe Night The Ghost Got In ",'10 Std English Guide \n','\nEnglish Guide For Class 10 \n Pdf','\n10 Std English Guide','\n10 Std English','\n Guru','\n \n 1\n','\nHis First Flight Story In Tamil Pdf ','\nTenth English Guide ']
                            for i in short_list:
                                res = res.replace(i,"")
                            for i in my_list:
                                res = res.replace(i,"")
                            res = res.replace("\n","")
                            res = res.replace("His First Flight","")
                            res = res.replace("Guru","")

                            res = res.replace("Write With  Con�denceCheck your grammar,  spelling, and punctuation  instantly with GrammarlyLearn MoreGrammarly","")

                            ans_arr.append(res)

                        elif(i==count-1):
                            my_list = ["Text Dependent Questions Answer Key","10th English The Night The Ghost Got In",'The Night The Ghost Got In Pdf','The Night The Ghost Got In Characters','The Night The Ghost Got In Moral','The Night The Ghost Got In','The Night Ghost Got In','Pdf Download ','Guru 10th English','10th English Guide','10th English Solutions','10th Samacheer English Guide','10th English Solutions','10th English Unit','English 10th Guide','English 10th Guide','Tenth English Guide','10 Std English Guide','His First Flight Story In Tamil Pdf','10th English Book Solutions ','10th English Book Answers','Guru 0th English','10 Std English','10th EnglishHis First Flight','English Guide For Class 10  Pdf','10th English Guide Pdf Download','10th Standard English Guide','10 Std English Guide','English 10th Guide','10th English Book']
                            res = "Question "+str(i+1)+". " + res2.split("Question "+str(i+1)+". ")[1]
        #                         print("result "+str(i+1),res)
                            res = res.replace("\n","")
                            ques_arr.append(find_between(res,"Question "+str(i+1)+". ","Answer:"))
                            res = res.replace("Question "+str(i+1)+". "+ques_arr[i+count1],"")
                            res = res.replace("Answer:","")
                            for i in my_list:
                                res = res.replace(i,"")
                            res = res.replace("\n","")
                            res = res.replace("His First Flight","")
                            res = res.replace("Guru","")
                            res = res.replace("Write With  Con�denceCheck your grammar,  spelling, and punctuation  instantly with GrammarlyLearn MoreGrammarly","")
                            ans_arr.append(res)

                else:
                    res2 = arr[j]
                    count=0  
                    head_arr.append(find_between(arr[j],chr(alp+j)+". ","Question 1."))
                    find_word = 'Answer:'
                    counter = res2.count(find_word)
                    count = count + counter
                    for i in range(count):
                        if(i<count-1):
                            res = "Question "+str(i+1)+". " + find_between(res2,"Question "+str(i+1)+". ","Question "+str(i+2)+". ")
        #                         print("result "+str(i+1),res)
                            res = res.replace("\n","")
                            ques_arr.append(find_between(res,"Question "+str(i+1)+". ","Answer:"))
                            res = res.replace("Question "+str(i+1)+". "+ques_arr[i],"")
                            res = res.replace("Answer:","")
                            res = res.replace("\n","")
                            res = res.replace("His First Flight","")
                            res = res.replace("Guru","")
                            res = res.replace("Write With  Con�denceCheck your grammar,  spelling, and punctuation  instantly with GrammarlyLearn MoreGrammarly","")
                            ans_arr.append(res)

                        elif(i==count-1):
                            res = "Question "+str(i+1)+". " + res2.split("Question "+str(i+1)+". ")[1]
        #                         print("result "+str(i+1),res)
                            res = res.replace("\n","")
                            ques_arr.append(find_between(res,"Question "+str(i+1)+". ","Answer:"))
                            res = res.replace("Question "+str(i+1)+". "+ques_arr[i],"")
                            res = res.replace("Answer:","")
                            res = res.replace("\n","")
                            res = res.replace("His First Flight","")
                            res = res.replace("Guru","")
                            res = res.replace("Write With  Con�denceCheck your grammar,  spelling, and punctuation  instantly with GrammarlyLearn MoreGrammarly","")
                            ans_arr.append(res)


                result += "\n"+head_arr[j]+":\n"
                for i in range(len(ques_arr)):
                    result += "\nQuestion "+str(i+1)+" : "+ques_arr[i]+"\n"
                    result += "Answer "+str(i+1)+" : "+ ans_arr[i]+"\n"
                    result = result.replace("Write With  Con�denceCheck your grammar,  spelling, and punctuation  instantly with GrammarlyLearn MoreGrammarly","")
                    result = result.replace("10th Class","")
                    result = result.replace("Supercharge your  DevelopersInteractive in-browser environments keep  you engaged and test your progress as you  goEducative Business Open","")
                    result = result.replace("Instantly Check  Your WritingCheck your grammar,  spelling, and punctuation  instantly with GrammarlyLearn MoreGrammarly","")

                multi_obj[multi_cnt] = { "heading":head_arr[j],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                multi_cnt +=1

            multi_object = {}
            multi_object["Multiline questions"] = multi_obj
            obj[cnt] = multi_object
            cnt = cnt + 1

            #About the Author:
            if "About the Author:" in textbook_content:
                author_content = find_between(textbook_content,"About the Author:",heading+" Summary:")
                if (author_content == ""):
                    author_content = find_between(textbook_content,"About the Author:",heading+" summary:")
                author_content = author_content.replace("10th English Solutions","")
                author_content = author_content.replace("\n","")


                result += "\nAbout the author:\n"
                result += author_content

                author_obj = {}
                author_obj["About the author"] = { "heading":"About the author","question":"","answer":author_content}
                obj[cnt] = author_obj
                cnt = cnt + 1

            elif "The Night the Ghost Got in by James Thurber:" in textbook_content:
                author_content = find_between(textbook_content,"The Night the Ghost Got in by James Thurber:",heading+" Summary:")
                author_content = author_content.replace("\n","")
                author_content = author_content.replace("10th English Solutions","")


                result += "\nAbout the author:\n"
                result += author_content

                author_obj = {}
                author_obj["About the author"] = { "heading":"About the author","question":"","answer":author_content}
                obj[cnt] = author_obj
                cnt = cnt + 1

            #Summary 
            summary_content = find_between(textbook_content,"Summary:",heading+" Glossary:")
            if (summary_content == ""):
                summary_content = find_between(textbook_content,"summary:",heading+" Glossary:")

            summary_content = summary_content.replace("10th English Solutions","")
            summary_content = summary_content.replace("Loading [MathJax]/extensions/MathZoom.js","")
            summary_content = summary_content.replace("Loading [MathJax]/extensions/MathZoom.js","")
            summary_content = summary_content.replace("\n","")
            summary_content = summary_content.replace("\\","")
            pattern = r'[0-9]'
            summary_content = re.sub(pattern, '', summary_content) 

            result += "\n\nSummary of the lesson:\n"
            result += summary_content

            summary_obj = {}
            summary_obj["Summary"] = { "heading":"Summary of the lesson","question":"","answer":summary_content}
            obj[cnt] = summary_obj
            cnt = cnt + 1

            #Synonyms
            ques_arr = []
            ans_arr = []
            synonym_content = find_between(textbook_content,"Synonyms","Antonyms")
            if ch_no == 5:
                synonym_content = synonym_content.replace("15. Dqyid is also a keen sportsman.  (a) strong  (b) feeble  (c) creative  (d) ghastly  \nAnswer:  (a) strong\nAnswer:  (a) connected\nAnswer:  (d) grammar\n","15. Dqyid is also a keen sportsman.  (a) strong  (b) feeble  (c) creative  (d) ghastly  \nAnswer:  (a) strong 16. ECO2 is linked to an interactive white board to teach PE lesson (a) connected (b) loosened (c) chained (d) levitate\nAnswer:  (a) connected\n17. David uses ECO2 to speak in complete sentences with correct syntax. (a) symmetry (b) centrifugal (c) synecdoche (d) grammar\nAnswer:  (d) grammar\n")

            for i in range(50):
                synonym_content = synonym_content.replace(" "+str(i+1)+". ","\n"+" "+str(i+1)+". ")



            count = 0
            for i in range(50):
                if str(i+1)+". " in synonym_content:
                    count = count + 1

            for i in range(count):
                if(i<count-1):
                    res = str(i+1)+". " + find_between(synonym_content,str(i+1)+". " ,str(i+2)+". " )
                    my_list = ['10th English Solutions','Loading [MathJax]/extensions/MathZoom.js','\n','Loading [MathJax]/extensions/MathMenu.js']
                    for k in my_list:
                        res = res.replace(k,"")

                    ques_arr.append(find_between(res,str(i+1)+". ","Answer:"))
                    res = res.replace(str(i+1)+". "+ques_arr[i],"")
                    res = res.replace("Answer:","")
                    for j in my_list:
                        res = res.replace(j,"")
                    if len(res) >=100:
                        res = "  (d) infectious"
                    res = res.replace("\n","")
                    pattern = r'[0-9]'
                    res = re.sub(pattern, '', res) 
                    ans_arr.append(res)

                elif(i==count-1):
                    res = str(i+1)+". " + synonym_content.split(str(i+1)+". ")[1]
                    my_list = ['10th English Solutions','Loading [MathJax]/extensions/MathZoom.js','\n','Loading [MathJax]/extensions/MathMenu.js']
                    for k in my_list:
                        res = res.replace(k,"")
                    ques_arr.append(find_between(res,str(i+1)+". ","Answer:"))
                    res = res.replace(str(i+1)+". "+ques_arr[i],"")
                    res = res.replace("Answer:","")
                    for j in my_list:
                        res = res.replace(j,"")

                    res = res.replace("\n","")
                    pattern = r'[0-9]'
                    res = re.sub(pattern, '', res) 
                    ans_arr.append(res)

            result += "\n\nSynonyms:\n"
            for i in range(len(ques_arr)):
                result += "\nQuestion "+str(i+1)+" : "+ques_arr[i]+"\n"
                result += "Answer "+str(i+1)+" : "+ ans_arr[i]+"\n"

            syn_obj = {}
            syn_obj["Synonyms"] = { "heading":"Synonyms","question":toObject(ques_arr),"answer":toObject(ans_arr)}
            obj[cnt] = syn_obj
            cnt = cnt + 1

            #Antonyms
            ques_arr = []
            ans_arr = []
            antonym_content = find_between(text,"Antonyms","Hope that the above shaped information")
            antonym_list = [" – Samacheer ","/2021","\nSamacheer Kalvi\n" ,"\n10th English Solutions", "\nProse Chapter", "1\n – Samacheer","\n 3\n","6/17/2021","Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books"," \n 3\n","Pdf","Class 10","English Chapter 6","Questions And Answers","Guru","Summary Pdf","English Guide For Class 10","Loading [MathJax]/extensions/MathMenu.js","Loading [MathJax]/extensions/MathZoom.js",heading]
            for i in antonym_list:
                antonym_content = antonym_content.replace(i,"")
            for i in range(50):
                antonym_content = antonym_content.replace(" "+str(i+1)+". ","\n"+" "+str(i+1)+". ")

            count = 0
            for i in range(50):
                if str(i+1)+". " in antonym_content:
                    count = count + 1

            for i in range(count):
                if(i<count-1):
                    res = str(i+1)+". " + find_between(antonym_content,str(i+1)+". " ,str(i+2)+". " )
                    res = res.replace("\n","")
                    ques_arr.append(find_between(res,str(i+1)+". ","Answer:"))
                    res = res.replace(str(i+1)+". "+ques_arr[i],"")
                    res = res.replace("Answer:","")
                    res = res.replace("\n","")
                    res = res.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books\n6/17/2021 \nSamacheer Kalvi\n \n10th English Solutions \nProse Chapter 1\n – Samacheer \n 3","")

                    pattern = r'[0-9]'
                    res = re.sub(pattern, '', res)  
                    ans_arr.append(res)

                elif(i==count-1):
                    res = str(i+1)+". " + antonym_content.split(str(i+1)+". ")[1]
                    res = res.replace("\n","")
                    ques_arr.append(find_between(res,str(i+1)+". ","Answer:"))
                    res = res.replace(str(i+1)+". "+ques_arr[i],"")
                    res = res.replace("Answer:","")
                    res = res.replace("\n","")
                    pattern = r'[0-9]'
                    res = re.sub(pattern, '', res)  
                    ans_arr.append(res)



            result += "\nAntonyms:\n"
            for i in range(len(ques_arr)):
                result += "\nQuestion "+str(i+1)+" : "+ques_arr[i]+"\n"
                result += "Answer "+str(i+1)+" : "+ ans_arr[i]+"\n"

            ant_obj = {}
            ant_obj["Antonyms"] = { "heading":"Antonyms","question":toObject(ques_arr),"answer":toObject(ans_arr)}
            obj[cnt] = ant_obj
            cnt = cnt + 1


            grammar = []
            speaking = []
            reading = []
            vocabulary = []
            contents = []
            writing = []
            listening = []
            letter_writing = []
            affixes = []
            nominalisation = []

            vocabulary_contents = []
            grammar_contents = []
            speaking_contents = []
            reading_contents = []
            writing_contents = []
            listening_contents = []
            affixes = []
            letter_writing_contents = []
            affixes_contents = []
            nominalisation_contents = []

            #letter writing
            res = 'M. Exercise:'
            if res in textbook_content:
                letter_writing.append(i)
            nominalisation1 = ['G. Write the noun forms of the following words.','H. Complete the following sentences using the noun form of the words given in brackets.','I. Rewrite the sentences nominalising the underlined words. The first one has been done for you.','J. Combine the pairs of sentences given below’ into a single sentence using the noun form of the highlighted words.','K. Complete the sentences in the paragraph using the appropriate form of words given in brackets.','L. Identify the phrases in the following sentences and classify them as Adjective, Adverb or Noun phrases.']
            vocabulary1 = ['C. Change the parts of speech of the given words in the chart.','D. Read the following sentences and change the form of the underlined words as directed.','E. Use the following words to construct meaningful sentences on your own.','C. Look at the following expressions from the text. With the help of your teacher rewrite them in standard English. One has been done for you.','D. Complete the given tabular column with the suitable plural forms.','D. Pick out the idioms and phrases from the box and write them in the blanks equivalent to their meanings. One is done for you.','E. Read the given sentences carefully and fill in with appropriate phrasal verbs. Choose them from the help box.','F. Read the given passage carefully and fill in the blanks with suitable phrasal verbs from the help box.','Complete the following table with two more compound words.','C. Combine the words in column A with those in column B to form compound words as many as you can.','D. Form compound words from the boxes given below and fill in the blanks in the sentences that follow with the appropriate compound words.','C. Pick out the contractions from the lesson and expand them.','D. Expand the following abbreviations or acronyms','E. Given below are some idiomatic phrases. Find the meaning of it usingthe dictionary:','C. In column A are some of the idiomatic phrases from the essay. Match them with equivalent single words in column B:','D. Frame sentences of your own using the above idiomatic phrases.','E. Given below are some idiomatic phrases. Find the meaning of it using the dictionary:','C. Complete the following sentences by choosing the correct options given.','Use the given examples and make sentences of your own.  Commonly confused words','D. Complete the tabular column by finding the meaning of both the words given in the boxes. Use them in sentences of your own.']
            writing1 = ['I. Prepare attractive advertisements using the hints given below.','J. Write a report of the following events in about 100-120 words.','M. Write a speech for your school Literary Association celebration with the given lead.','J. Read the given slogans and match them appropriately with their theme.','K. Look at the images of familiar advertisements given below. Identify the products and try to frame your own slogans for each one of them.','L. Look at the pitcures given below and frame your own slogans:','Q. Prepare notice for the following:','R. Write an article for the following:','K. Fill in the missing words in this email.','L. Write an email to your teacher about the interesting English model that you have prepared for the literary fest.','M. Practice Exercise','N. Write about Your Favourite Sports person/ Famous personality/Hobby/ Recipe by starting your own blog.','I. Create posters for following:','J. Draft Letters for the following','I. Create a pamphlet for the following:','J. Write a letter of enquiry for the following']
            listening1 = ['E. Listen to the story and answer the question given below.','F. Here is a travelogue by the students of Government Girls Higher Secondary School, Pattukkottai after their trip to Darjeeling. Listen to the travelogue and answer the following questions.','E. Listen to the story and answer the following.','G. Listen to the passage read by the teacher and say whether the given statement is true or false.','Listen to the procedure to book online tickets carefully and fill in the blanks that follow. Listen to the recording twice.','N. Fill in the blanks :','F. Listen to the passage and state whether the statements are true (T), false (F) or no information (N)?','G. Listen to the passage again and answer the questions.','H. Complete the sentences after reading the passage.','F. Listen to the article titled “Remembering Nel Jayaraman”']
            grammar1 = ["Imagine you have been to Thanjavur recently. Based on your experience and the data given below about Thanjavur, suggest and guide your friend who wishes to visit Thanjavur and places nearby, using modals in your sentences.","B. Combine the pairs of sentences below into simple, complex and compound","A. Transform the following sentences as instructed.","G. Tick the correct sentences:","F. Fill in the blank with the correct alternative:","E. Replace the underlined words by a participle in the following sentences:","D. Identify the non-finites in the following sentences and underline them","C. Change the singular nouns to plurals by either adding ‘s’, ‘ies’, ‘es\ ‘ves","B. Fill in the blanks with the appropriate verb:","A. Fill in the blanks appropriately:","G. Tick the right choice (Indirect Speech).","F. Read the following dialogue and report it.","E. Read the different verb forms where they remain the same in the direct and indirect speech in the following cases. Fill in the blanks with missing indirect speech.","D. Join the sentences using ‘Relative Pronouns’.","C. Fill in the gaps with appropriate Pronouns.","B. Fill in the gaps with personal pronouns.","A. Write the words that can replace Ravi, Rani, woman, luggage and the dog when we use them for the second and subsequent times in the passage ……………….., ………………., and ………………. .","F. Rearrange the words in the correct order to make meaningful sentences.","E. Supply suitable linkers.","D. Tick the correct linker.","C. Combine the pairs of sentences using appropriate connectors.","B. Fill in the blanks with the connector that goes with the underlined words.","A. Complete the sentences given below choosing the right connectors given in brackets.","H. Read the situations given and frame two suitable sentences in the appropriate form of the tenses.","G. Read the story and rewrite it using the simple past tense.","F. The following passage has not been edited. There is one error in the tense of the verb in each line. Write the wrong word as well as the correct word in the given place. One is done for you.","E. In the following passage, some words are missing. Choose the correct words from the given options to complete the passage.","D. Underline the verbs and identify the tense forms.","C. Fill in the blanks using the verbs in the brackets in the future form.","B. Complete the sentences in past tense forms.","A. Complete the sentences in present tense forms.","E. Edit the following passage by replacing the underlined incorrect words with correct prepositional phrases.","D. Fill in the blanks by choosing the most appropriate prepositional phrase from the given options.","C. Refer to the dictionary to find out the meaning of the following prepositions and match them with the correct meaning.","B. Few articles are missing in the given passage. Edit the passage given below by adding suitable articles wherever necessary.","A. Na’garajan and Dhanalakshmi want to buy a new house. They have come to see a house for sale. Complete the conversation below by adding a, an or the.","E. Here are a few sentences already done for you. The clues given would be helpful to \make more sentences on your own.","D. Read the following dialogues and supply appropriate modals.","C. Read the dialogue and fill in the blanks with suitable modals.","A. Complete these sentences using appropriate modals. The clues in the brackets will help you.","B. Rewrite the following sentences by rectifying the errors in the use of modals."]
            speaking1 = ["F. Exercise","G. A road map is given below. Answer the questions that follow with the help of the road map. Work in pairs and discuss to give directions to get to one place from another.","I. Prepare on any one of the topics given below and present before your English teacher.","O. Given below are the various personalities from different fields. The topic of discussions is also given. Take roles and conduct a Mock Press Conference.","Mock Press Conference:","I. Develop a story with the given pictures and narrate it to your class. Your story must have a plot and vivid details.","H. Read the clues given below and develop your story. Narrate your story to the class.","Techniques and Presentation skills:","Story Telling:","G. Use this passage to play the game. You can collect information on other famous personalities and play too.","F. Quiz: Who am I ?","G. Here is a dialogue between a father and his daughter. Continue the dialogue with at least five utterances and use all the clues given above."]
            reading1 = ["H. State whether the given statements are true or false. If false correct the statements.","Read the story carefully and answer the questions asked below","H. Read the poem carefully and answer the questions that follow:","J. Read the comic strip and ans’ e following questions.","Read the following letter from a parent to her son’s coach and answer the questions given below:","I. Read the data below and answer the following questions.","K. State whether the following statements are true or false.","J. Look at the following situations the writer was in. He could have avoided the situation and saved himself. Glance through the write up again and comment on what the writer should have done in the following situations.","I. Suggesting titles.","H. Read the following incident carefully to answer the questions that follow.","H. Read the following passage and answer the questions that follow."]

            for i in range(len(speaking1)):
                if speaking1[i] in textbook_content:
                    speaking.append(speaking1[i])

            for i in range(len(reading1)):
                if reading1[i] in textbook_content:
                    reading.append(reading1[i])

            for i in range(len(nominalisation1)):
                if nominalisation1[i] in textbook_content:
                    nominalisation.append(nominalisation1[i])

            for i in range(len(writing1)):
                if writing1[i] in textbook_content:
                    writing.append(writing1[i])

            for i in range(len(listening1)):
                if listening1[i] in textbook_content:
                    listening.append(listening1[i])

            for i in range(len(vocabulary1)):
                if vocabulary1[i] in textbook_content:
                    vocabulary.append(vocabulary1[i])

            for i in range(len(grammar1)):
                if grammar1[i] in textbook_content:
                    grammar.append(grammar1[i])


            data = ["Vocabulary","Listening","Writing","Speaking","Grammar","Reading"]

            if "M. Write a speech for your school Literary Association celebration with the given lead." in textbook_content:
                data = ["Vocabulary","Listening Activity","M. Write a speech for your school Literary Association celebration with the given lead.","Speaking Activity","Grammar","Reading","Synonyms","Antonyms"]

            if "summary:" in textbook_content:
                data.append("summary:")
            if "Summary:" in textbook_content:
                data.append("Summary:")
            if "Active And Passive" in textbook_content:
                data.append("Active And Passive")
            if "About the Author" in textbook_content:
                data.append("About the Author")
            if "Nominalisation" in textbook_content:
                data.append("Nominalisation")
            if "Affixes" in textbook_content:
                data.append("Affixes")
            if "Letter Writing" in textbook_content:
                data.append("Letter Writing")

            out = list(sorted(data, key=lambda item: textbook_content.index(item)))


            for i in range(len(out)):
                if (i<len(out)-1):
                    res = out[i]+find_between(textbook_content,out[i],out[i+1])
                elif (i==len(out)-1):
                    res = out[i]+textbook_content.split(out[i])[1]
                contents.append(res)   

            for j in range(len(contents)):
                if "Vocabulary" in contents[j]:
                    vocabulary_out = list(sorted(vocabulary, key=lambda item: contents[j].index(item)))
                    for i in range(len(vocabulary_out)):
                        if (i<len(vocabulary_out)-1):
                            res = vocabulary_out[i]+find_between(contents[j],vocabulary_out[i],vocabulary_out[i+1])
                        elif (i==len(vocabulary_out)-1):
                            res = vocabulary_out[i]+contents[j].split(vocabulary_out[i])[1]
                        vocabulary_contents.append(res) 

                if "Listening" in contents[j]:
                    listening_out = list(sorted(listening, key=lambda item: contents[j].index(item)))
                    for i in range(len(listening_out)):
                        if (i<len(listening_out)-1):
                            res = listening_out[i]+find_between(contents[j],listening_out[i],listening_out[i+1])
                        elif (i==len(listening_out)-1):
                            res = listening_out[i]+contents[j].split(listening_out[i])[1]
                        listening_contents.append(res) 

                if "Speaking" in contents[j]:
                    speaking_out = list(sorted(speaking, key=lambda item: contents[j].index(item)))
                    for i in range(len(speaking_out)):
                        if (i<len(speaking_out)-1):
                            res = speaking_out[i]+find_between(contents[j],speaking_out[i],speaking_out[i+1])
                        elif (i==len(speaking_out)-1):
                            res = speaking_out[i]+contents[j].split(speaking_out[i])[1]
                        speaking_contents.append(res) 

                if "Reading" in contents[j]:
                    reading_out = list(sorted(reading, key=lambda item: contents[j].index(item)))
                    for i in range(len(reading_out)):
                        if (i<len(reading_out)-1):
                            res = reading_out[i]+find_between(contents[j],reading_out[i],reading_out[i+1])
                        elif (i==len(reading_out)-1):
                            res = reading_out[i]+contents[j].split(reading_out[i])[1]
                        reading_contents.append(res)

                if "M. Write a speech for your school Literary Association celebration with the given lead." in contents[j]:      
                    writing_out = list(sorted(writing, key=lambda item: contents[j].index(item)))
                    for i in range(len(writing_out)):
                        if (i<len(writing_out)-1):
                            res = writing_out[i]+find_between(contents[j],writing_out[i],writing_out[i+1])
                        elif (i==len(writing_out)-1):
                            res = writing_out[i]+contents[j].split(writing_out[i])[1]
                        writing_contents.append(res) 

                if "M. Write a speech for your school Literary Association celebration with the given lead." not in contents[j]:      
                    if "Writing" in contents[j]:
                        writing_out = list(sorted(writing, key=lambda item: contents[j].index(item)))
                        for i in range(len(writing_out)):
                            if (i<len(writing_out)-1):
                                res = writing_out[i]+find_between(contents[j],writing_out[i],writing_out[i+1])
                            elif (i==len(writing_out)-1):
                                res = writing_out[i]+contents[j].split(writing_out[i])[1]
                            writing_contents.append(res) 

                if "Grammar" in contents[j]:
                    grammar_out = list(sorted(grammar, key=lambda item: contents[j].index(item)))
                    for i in range(len(grammar_out)):
                        if (i<len(grammar_out)-1):
                            res = grammar_out[i]+find_between(contents[j],grammar_out[i],grammar_out[i+1])
                        elif (i==len(grammar_out)-1):
                            res = grammar_out[i]+contents[j].split(grammar_out[i])[1]
                        grammar_contents.append(res) 

                if "Letter Writing" in contents[j]:
                    letter_writing_out = list(sorted(letter_writing, key=lambda item: contents[j].index(item)))
                    for i in range(len(letter_writing_out)):
                        if (i<len(letter_writing_out)-1):
                            res = letter_writing_out[i]+find_between(contents[j],letter_writing_out[i],letter_writing_out[i+1])
                        elif (i==len(letter_writing_out)-1):
                            res = letter_writing_out[i]+contents[j].split(letter_writing_out[i])[1]
                        letter_writing_contents.append(res) 

                if "Affixes" in contents[j]:
                    affixes_out = list(sorted(affixes, key=lambda item: contents[j].index(item)))
                    for i in range(len(affixes_out)):
                        if (i<len(affixes_out)-1):
                            res = affixes_out[i]+find_between(contents[j],affixes_out[i],affixes_out[i+1])
                        elif (i==len(affixes_out)-1):
                            res = affixes_out[i]+contents[j].split(affixes_out[i])[1]
                        affixes_contents.append(res)

                if "Nominalisation" in contents[j]:
                    nominalisation_out = list(sorted(nominalisation, key=lambda item: contents[j].index(item)))
                    for i in range(len(nominalisation_out)):
                        if (i<len(nominalisation_out)-1):
                            res = nominalisation_out[i]+find_between(contents[j],nominalisation_out[i],nominalisation_out[i+1])
                        elif (i==len(affixes_out)-1):
                            res = nominalisation_out[i]+contents[j].split(nominalisation_out[i])[1]
                        nominalisation_contents.append(res)


            vocab_obj = {}
            vocab_object = {}
            vocab_cnt = 1
            result += "\nVocabulary\n"
            for i in range(len(vocabulary_contents)): 
                vocabulary_contents[i] = vocabulary_contents[i].replace("Answers","Answers:")
                ques_arr = []
                ans_arr = []

                if "C. Change the parts of speech of the given words in the chart." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    question = res
                    answer = res
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":question,"answer":answer}
                    vocab_cnt += 1 

                if "C. Look at the following expressions from the text. With the help of your teacher rewrite them in standard English. One has been done for you." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":res,"answer":res}
                    vocab_cnt += 1 

                if "C. Pick out the contractions from the lesson and expand them." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":res,"answer":res}
                    vocab_cnt += 1

                if "D. Complete the tabular column by finding the meaning of both the words given in the boxes. Use them in sentences of your own." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":res,"answer":res}
                    vocab_cnt += 1

                if "C. In column A are some of the idiomatic phrases from the essay. Match them with equivalent single words in column B:" in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":res,"answer":res}
                    vocab_cnt += 1

                if "D. Pick out the idioms and phrases from the box and write them in the blanks equivalent to their meanings. One is done for you." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    question = res
                    answer = res
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":question,"answer":answer}
                    vocab_cnt += 1 

                if "C. Combine the words in column A with those in column B to form compound words as many as you can." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    question = res
                    answer = res
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":question,"answer":answer}
                    vocab_cnt += 1 

                if "D. Complete the given tabular column with the suitable plural forms." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    res = "It may be an image"
                    question = res
                    answer = res
                    result+="\nQuestion  : "+res
                    result+="\nAnswer : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":question,"answer":answer}
                    vocab_cnt += 1 

                if "D. Read the following sentences and change the form of the underlined words as directed." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    if str(i+1)+". " in vocabulary_contents[i]:
                        count = 0
                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocabulary_contents[i].count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")

                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocabulary_contents[i],str(j+1)+". ",str(j+2)+". ")
                                res1 = res.split(")")[0]+")"
                                result+="\nQuestion "+str(j+1)+" : "+res1
                                ques_arr.append(res1)

                                res2 = res.split(")")[1]
                                result+="\nAnswer "+str(j+1)+" : "+res2
                                ans_arr.append(res2) 
                            elif(j  == count-1):
                                res = vocabulary_contents[i].split(str(j+1)+". ")[1]
                                res1 = res.split(")")[0]+")"
                                result+="\nQuestion "+str(j+1)+" : "+res1
                                ques_arr.append(res1)
                                res2 = res.split(")")[1]
                                result+="\nAnswer "+str(j+1)+" : "+res2
                                ans_arr.append(res2)
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "E. Read the given sentences carefully and fill in with appropriate phrasal verbs. Choose them from the help box." in vocabulary_contents[i]:
                    if str(i+1)+". " in vocabulary_contents[i]:
                        result+= "\n"+vocabulary_out[i]+"\n"
                        result+="\nOptions : It may be an image"
                        count = 0
                        vocab_ques = vocabulary_contents[i].split("Answers:")[0]
                        vocab_ans = vocabulary_contents[i].split("Answers:")[1]

                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ques.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")

                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ques,str(j+1)+". ",str(j+2)+". ")
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = find_between(vocab_ans,str(j+1)+". ",str(j+2)+". ")
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res) 
                            elif(j  == count-1):
                                res = vocab_ques.split(str(j+1)+". ")[1]
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = vocab_ans.split(str(j+1)+". ")[1]
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res)
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"option":"It may be an image","answer":toObject(ans_arr)}
                        vocab_cnt += 1 


                elif "Frame sentences of your own to bring out the meaning." in vocabulary_contents[i]:            
                    if(str(i+1)+". " in vocabulary_contents[i]):
                        result+= "\n"+vocabulary_out[i]+"\n"
                        count = 0
                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocabulary_contents[i].count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                        for j in range(16):
                            if(j < count-1):
                                res = find_between(vocabulary_contents[i],str(j+1)+". ",str(j+2)+". ")
                                ques = res.split(" – ")[0]
                                ques_arr.append(ques)
                                result+="\nQuestion "+str(j+1)+" : "+ques
                                ans = res.split(" – ")[1]
                                result+="\nAnswer "+str(j+1)+" : "+ans
                                ans_arr.append(ans) 
                            elif(j  ==count-1):
                                res = vocabulary_contents[i].split(str(j+1)+". ")[1]
                                ques = res.split(" – ")[0]
                                result+="\nQuestion "+str(j+1)+" : "+ques
                                ques_arr.append(ques)
                                ans = res.split(" – ")[1]
                                result+="\nAnswer "+str(j+1)+" : "+ans
                                ans_arr.append(ans)    
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "E. Use the following words to construct meaningful sentences on your own." in vocabulary_contents[i]:
                    result+= "\n"+vocabulary_out[i]+"\n"
                    if(str(i+1)+". " in vocabulary_contents[i]):
                        count = 0
                        for k in range(5):
                            find_word = str(k+1)+". "
                            counter = vocabulary_contents[i].count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocabulary_contents[i],str(j+1)+". ",str(j+2)+". ")
                                ques = res.split(" – ")[0]
                                res = res.replace(ques,"")
                                res = res.replace(" – ","")
                                ques_arr.append(ques)
                                result+="\nQuestion "+str(j+1)+" : "+ques
                                ans_arr.append(res) 
                                result+="\nAnswer "+str(j+1)+" : "+res
                            elif(j  ==count-1):
                                res = vocabulary_contents[i].split(str(j+1)+". ")[1]
                                ques = res.split(" – ")[0]
                                res = res.replace(ques,"")
                                res = res.replace(" – ","")
                                ques_arr.append(ques)
                                result+="\nQuestion "+str(j+1)+" : "+ques
                                ans_arr.append(res)
                                result+="\nAnswer "+str(j+1)+" : "+res
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "F. Read the given passage carefully and fill in the blanks with suitable phrasal verbs from the help box." in vocabulary_contents[i]:
                    if str(i+1)+". " in vocabulary_contents[i]:
                        result+= "\n"+vocabulary_out[i]+"\n"
                        result+="\nOptions : It may be an image"
                        count = 0
                        vocab_ques = vocabulary_contents[i].split("Answers:")[0]
                        vocab_ans = vocabulary_contents[i].split("Answers:")[1]

                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ans.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                        ques_arr.append(vocab_ques)
                        result+="\nQuestion "+str(j+1)+" : "+vocab_ques
                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ans,str(j+1)+". ",str(j+2)+". ")
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res) 
                            elif(j  == count-1):
                                res = vocab_ans.split(str(j+1)+". ")[1]
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res)
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"option":"It may be an image","answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "Complete the following table with two more compound words." in vocabulary_contents[i]:
                    vocabulary_contents[i] = vocabulary_contents[i].replace("\nAdditional:","")
                    if str(i+1)+". " in vocabulary_contents[i]:
                        result+= "\n"+vocabulary_out[i]+"\n"
                        count = 0
                        vocab_ques = vocabulary_contents[i].split("Answers:")[0]
                        vocab_ans = vocabulary_contents[i].split("Answers:")[1]

                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ans.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                        ques = "It may be an image"
                        result+="\nQuestion "+str(j+1)+" : "+ques
                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ans,str(j+1)+". ",str(j+2)+". ")
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res) 
                            elif(j  == count-1):
                                res = vocab_ans.split(str(j+1)+". ")[1]
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res)
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":ques,"answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "D. Form compound words from the boxes given below and fill in the blanks in the sentences that follow with the appropriate compound words." in vocabulary_contents[i]:
                    if str(i+1)+". " in vocabulary_contents[i]:
                        result+= "\n"+vocabulary_out[i]+"\n"
                        result+="\nOptions : It may an image"
                        count = 0
                        vocab_ques = vocabulary_contents[i].split("Answers:")[0]
                        vocab_ans = vocabulary_contents[i].split("Answers:")[1]

                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ques.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")

                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ques,str(j+1)+". ",str(j+2)+". ")
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = find_between(vocab_ans,str(j+1)+". ",str(j+2)+". ")
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res) 
                            elif(j  == count-1):
                                res = vocab_ques.split(str(j+1)+". ")[1]
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = find_between(vocab_ans,str(j+1)+". ","Additional:")
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res)
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"option":"It may be an image","answer":toObject(ans_arr)}
                        vocab_cnt += 1 


                elif "D. Expand the following abbreviations or acronyms" in vocabulary_contents[i]:
                    ques_arr = ['SIM','ISRO','WHO','CCTV','HDMI','LASER','MRI','CRY','RAM','ROM','CPU','ALU']
                    vocab_ques = "\n"+vocabulary_contents[i]
                    result+= vocabulary_out[i]+"\n"
                    result+="\nQuestion "+str(j+1)+" : "+vocab_ques
                    vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                    count = len(ques_arr)
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(vocab_ques,ques_arr[j]+":",ques_arr[j+1]+":")
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res
                        elif(j  == count-1):
                            res = vocab_ques.split(ques_arr[j]+":")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    vocab_cnt += 1 

                elif "E. Given below are some idiomatic phrases. Find the meaning of it using the dictionary:" in vocabulary_contents[i]:
                    if str(i+1)+". " in vocabulary_contents[i]:
                        count = 0
                        result+= "\n"+vocabulary_out[i]+"\n"
                        result+= "\nOptions: It may be an image"
                        vocab_ques = vocabulary_contents[i]

                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ques.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")

                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ques,str(j+1)+". ",str(j+2)+". ")
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                            elif(j  == count-1):
                                res = vocab_ques.split(str(j+1)+". ")[1]
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res

                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"option":"It may be an image","answer":""}
                        vocab_cnt += 1 

                elif "D. Frame sentences of your own using the above idiomatic phrases." in vocabulary_contents[i]:
                    if str(i+1)+". " in vocabulary_contents[i]:
                        count = 0
                        result+= "\n"+vocabulary_out[i]+"\n"
                        vocab_ques = vocabulary_contents[i]
                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ques.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                        ques = "It may be an image"
                        result+="\nQuestion "+str(j+1)+" : "+ques
                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ques,str(j+1)+". ",str(j+2)+". ")
                                ans_arr.append(res)
                                result+="\nAnswer "+str(j+1)+" : "+res

                            elif(j  == count-1):
                                res = vocab_ques.split(str(j+1)+". ")[1]
                                ans_arr.append(res)
                                result+="\nAnswer "+str(j+1)+" : "+res 
                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":ques,"answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "C. Complete the following sentences by choosing the correct options given." in vocabulary_contents[i]:
                    if str(i+1)+". " in vocabulary_contents[i]:
                        result+= "\n"+vocabulary_out[i]+"\n"
                        count = 0
                        vocab_ques = vocabulary_contents[i].split("Answers")[0]
                        vocab_ans = vocabulary_contents[i].split("Answers")[1]

                        for k in range(10):
                            find_word = str(k+1)+". "
                            counter = vocab_ques.count(find_word)
                            count = count + counter
                        vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")

                        for j in range(count):
                            if(j < count-1):
                                res = find_between(vocab_ques,str(j+1)+". ",str(j+2)+". ")
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = find_between(vocab_ans,str(j+1)+". ",str(j+2)+". ")
                                ans_arr.append(res) 
                                result+="\nAnswer: "+str(j+1)+" : "+res
                            elif(j  == count-1):
                                res = vocab_ques.split(str(j+1)+". ")[1]
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = vocab_ans.split(str(j+1)+". ")[1]
                                ans_arr.append(res)
                                result+="\nAnswer: "+str(j+1)+" : "+res

                        vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                        vocab_cnt += 1 

                elif "Use the given examples and make sentences of your own.  Commonly confused words" in vocabulary_contents[i]:
                    count = 0
                    ques_arr = ["brought","bought","affect","effect"]
                    vocab_ques = vocabulary_contents[i]
                    result+= "\n"+vocabulary_out[i]+"\n"
                    vocabulary_contents[i] = vocabulary_contents[i].replace(vocabulary_out[i],"")
                    count = 4
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(vocab_ques,ques_arr[j]+" – ",ques_arr[j+1]+" – ")
                            ans_arr.append(res) 
                            result+="\nAnswer: "+str(j+1)+" : "+res
                        elif(j  == count-1):
                            res = vocab_ques.split(ques_arr[j]+" – ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer: "+str(j+1)+" : "+res

                    vocab_obj[vocab_cnt] = { "heading":vocabulary_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    vocab_cnt += 1 

            vocab_object["Vocabulary"] = vocab_obj
            obj[cnt] = vocab_object
            cnt+=1

            speak_obj = {}
            speak_object = {}
            speak_cnt = 1
            result+="\nSpeaking Activity\n"
            for i in range(len(speaking_contents)): 
                ques_arr = []
                ans_arr = []
                if "G. Here is a dialogue between a father and his daughter. Continue the dialogue with at least five utterances and use all the clues given above." in speaking_contents[i]:
                    speak_ques = speaking_contents[i].split("Answers:")[0]
                    speak_ans = speaking_contents[i].split("Answers:")[1]
                    ques_arr.append(speak_ques)
                    result+="\nQuestion "+str(j+1)+" : "+speak_ques
                    count = 4
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    result+= "\n"+speaking_out[i]+"\n"
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(speaking_contents[i],str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res
                        elif(j  == count-1):
                            res = speaking_contents[i].split(str(j+1)+".")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt = 1 

                if "F. Quiz: Who am I ?" in speaking_contents[i]:
                    count = 8
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    result+= "\n"+speaking_out[i]+"\n"
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(speaking_contents[i],str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res) 
                            result+="\nQuestion "+str(j+1)+" : "+res
                        elif(j  == count-1):
                            res = speaking_contents[i].split(str(j+1)+".")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":toObject(ques_arr),"answer":""}
                    speak_cnt += 1 

                if "G. Use this passage to play the game. You can collect information on other famous personalities and play too." in speaking_contents[i]:
                    passage = "Charlie Chaplin was bom on April 16, 1889"+find_between(speaking_contents[i],"Charlie Chaplin was bom on April 16, 1889","Give Answers")
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    result+= "\n"+speaking_out[i]+"\n"
                    count = 7
                    for j in range(count):
                        if(j < count-1):
                            res = "Is"+find_between(speaking_contents[i],"Is","Is")
                            res1 = res.split("?")[0]+"?"
                            res2 = res.split("?")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                            speaking_contents[i] = speaking_contents[i].replace(res,"")

                        elif(j  == count-1):
                            res = speaking_contents[i].split("Is")[1]
                            res1 = res.split("?")[0]+"?"
                            res2 = res.split("?")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "Story Telling:" in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    ans_arr.append(speaking_contents[i])
                    result+="\nAnswer : "+speaking_contents[i]

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":"","answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "Techniques and Presentation skills:" in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    ans_arr.append(speaking_contents[i])
                    result+="\nAnswer : "+speaking_contents[i]

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":"","answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "H. Read the clues given below and develop your story. Narrate your story to the class." in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speak_ques = "Robert Bruce –"+find_between(speaking_contents[i],"Robert Bruce –","Once upon a time,")
                    speak_ans = "Once upon a time,"+speaking_contents[i].split("Once upon a time,")[1]
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    ques_arr.append(speak_ques)
                    result+="\nQuestion : "+speak_ques
                    ans_arr.append(speak_ans)
                    result+="\nAnswer : "+speak_ans

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "I. Develop a story with the given pictures and narrate it to your class. Your story must have a plot and vivid details." in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    ans_arr.append(speaking_contents[i])
                    result+="\nAnswer : "+speaking_contents[i]
                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":"","answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "Mock Press Conference:" in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    ans_arr.append(speaking_contents[i])
                    result+="\nAnswer : "+speaking_contents[i]
                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":"","answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "O. Given below are the various personalities from different fields. The topic of discussions is also given. Take roles and conduct a Mock Press Conference." in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    res = find_between(speaking_contents[i],'(i)','(ii)')
                    res1 = res.split("perfect discussion.")[0]+"perfect discussion."
                    res2 = res.replace(res1,"")
                    ques_arr.append(res1)
                    result+="\nQuestion 1 : "+res1
                    ans_arr.append(res2)
                    result+="\nAnswer 1 : "+res2

                    res = find_between(speaking_contents[i],'(ii)','(iii)')
                    res1 = res.split("that helped her to win.")[0]+"that helped her to win."
                    res2 = res.replace(res1,"")
                    ques_arr.append(res1)
                    result+="\nQuestion 2 : "+res1
                    ans_arr.append(res2)
                    result+="\nAnswer 2 : "+res2

                    res = speaking_contents[i].split('(iii)')[1]
                    res1 = res.split("to launch their new product.")[0]+"to launch their new product."
                    res2 = res.replace(res1,"")
                    ques_arr.append(res1)
                    result+="\nQuestion 3 : "+res1
                    ans_arr.append(res2)
                    result+="\nAnswer 3 : "+res2


                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt += 1

                if "I. Prepare on any one of the topics given below and present before your English teacher." in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    list1 = ['Prepare a welcome address on the occasion of Republic day celebration.','Prepare a Vote of thanks on the occasion of Independence day celebration.','Mock anchoring for annual day celebration','Collect images of some electronic gadgets and play a JAM (just a minute) game by picking one image and talking for a minute about it in your classroom.']
                    count = 4
                    for j in range(count):
                        if(j < count-1):
                            res = list1[j]+find_between(speaking_contents[i],list1[j],list1[j+1])
                            ques_arr.append(list1[j])
                            result+="\nQuestion "+str(j+1)+" : "+list1[j]
                            res1 = res.split(list1[j])[1]
                            ans_arr.append(res1)
                            result+="\nAnswer "+str(j+1)+" : "+res1
                        elif(j  == count-1):
                            res = list1[j]+speaking_contents[i].split(list1[j])[1]
                            ques_arr.append(list1[j])
                            result+="\nQuestion "+str(j+1)+" : "+list1[j]
                            res1 = res.split(list1[j])[1]
                            ans_arr.append(res1)
                            result+="\nAnswer "+str(j+1)+" : "+res1

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt += 1     

                if "G. A road map is given below. Answer the questions that follow with the help of the road map. Work in pairs and discuss to give directions to get to one place from another." in speaking_contents[i]:
                    count = 5
                    result+= "\n"+speaking_out[i]+"\n"
                    result+= "\nRoadmap: It may be an image"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(speaking_contents[i],"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = speaking_contents[i].split("Question "+str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"roadmap":"It may be an image","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt += 1 

                if "F. Exercise" in speaking_contents[i]:
                    result+= "\n"+speaking_out[i]+"\n"
                    speaking_contents[i] = speaking_contents[i].replace(speaking_out[i],"")
                    mylist = ['Samacheer Kalvi 10th English Solutions Prose Chapter 7 The Dying Detective – Samacheer Guru\n\n','Loading [MathJax]/extensions/MathZoom.js','6/17/2021','Samacheer Kalvi','10th English Solutions', 'Prose', 'Chapter 7', 'The Dying Detective – Samacheer Guru','14/33','13/33','14/33','15/33']
                    for k in mylist:
                         speaking_contents[i] = speaking_contents[i].replace(k,"")
                    speaking_contents[i] = find_between(input_text,"F. Exercise","Reading:")
                    list1 = ['1. Present the review of a movie that you have watched recently.','2. Give the review of a book that has interested you a lot.','3. Review an event which your school has hosted recently.']
                    count = len(list1)
                    for j in range(count):
                        if(j < count-1):
                            res = list1[j]+find_between(speaking_contents[i],list1[j],list1[j+1])
                            ques_arr.append(list1[j])
                            result+="\nQuestion "+str(j+1)+" : "+list1[j]
                            res1 = res.split(list1[j])[1]
                            res1 = res1.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            res1 = res1.replace("\n\nLoading [MathJax]/extensions/MathZoom.js\n\n\n\n6/17/2021 Samacheer Kalvi 10th English Solutions Prose Chapter 7 The Dying Detective – Samacheer Guru\n\n 14/33\n\n","")
                            res1 = res1.replace("\n\nLoading [MathJax]/extensions/MathZoom.js\n\n\n\n6/17/2021 Samacheer Kalvi 10th English Solutions Prose Chapter 7 The Dying Detective – Samacheer Guru\n\n 13/33\n\n","")
                            ans_arr.append(res1)
                            result+="\nAnswer "+str(j+1)+" : "+res1

                        elif(j  == count-1):
                            res = list1[j]+speaking_contents[i].split(list1[j])[1]
                            ques_arr.append(list1[j])
                            result+="\nQuestion "+str(j+1)+" : "+list1[j]
                            res1 = res.split(list1[j])[1]
                            res1 = res1.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            res1 = res1.replace("\n\nLoading [MathJax]/extensions/MathZoom.js\n\n\n\n6/17/2021 Samacheer Kalvi 10th English Solutions Prose Chapter 7 The Dying Detective – Samacheer Guru\n\n 15/33\n\n","")
                            ans_arr.append(res1)
                            result+="\nAnswer "+str(j+1)+" : "+res1

                    speak_obj[speak_cnt] = { "heading":speaking_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    speak_cnt += 1

            speak_object["Speaking Activity"] = speak_obj
            obj[cnt] = speak_object
            cnt +=1
    
            read_obj = {}
            read_object = {}
            read_cnt = 1
            result+= "\nReading Activity\n"
            for i in range(len(reading_contents)): 

                ques_arr = []
                ans_arr = []   
                passage = ""
                if "Read the story carefully and answer the questions asked below" in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    passage = reading_contents[i].split("G. Match the following.")[0]
                    read_ques = find_between(reading_contents[i],"G. Match the following.","Answer:")
                    count = 5
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(read_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                        elif(j  == count-1):
                            res = read_ques.split(str(j+1)+".")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                        answer = "It may be an image"
                        result+="\nAnswer "+str(j+1)+" : "+answer

                    read_obj[read_cnt] = { "heading":reading_out[i],"passage":passage,"question":toObject(ques_arr),"answer":answer}
                    read_cnt+=1 

                if "Read the following letter from a parent to her son’s coach and answer the questions given below:" in reading_contents[i]:
                    passage = reading_contents[i].split("P. Answer the following questions:")[0]
                    read = reading_contents[i].split("P. Answer the following questions:")[1]
                    count = 5
                    result+= "\n"+reading_out[i]+"\n"
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(read,"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            if res == "":
                                res = find_between(read,"Question "+str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.replace(res1,"")
                            res2 = res2.replace("Answer:","")
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = read.split(str(j+1)+".")[1]
                            res1 = res.split("(a)")[0]
                            res2 = res.replace(res1,"")
                            res2 = res2.replace("Answer:","")
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 

                if "H. Read the following incident carefully to answer the questions that follow." in reading_contents[i]:
                    reading_contents[i] = reading_contents[i].replace(reading_out[i],"")
                    passage = reading_contents[i].split("Question 1.")[0]
                    result+= "\n"+reading_out[i]+"\n"
                    count = 5
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.replace(res1,"")
                            res2 = res2.replace("Answer:","")
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+".")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.replace(res1,"")
                            res2 = res2.replace("Answer:","")
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1

                if "H. Read the following passage and answer the questions that follow." in reading_contents[i]:
                    passage = reading_contents[i].split("Question 1.")[0]
                    result+= "\n"+reading_out[i]+"\n"
                    count = 6
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.replace(res1,"")
                            res2 = res2.replace("Answer:","")
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            if j <= 3:
                                ans_arr.append(res2)
                                result+="\nAnswer "+str(j+1)+" : "+res2
                            if j == 4:
                                ans_arr.append(" Bungee jumping point is located in Mohan Chatti village, in Rishikesh, India at a height of 83 meters.")
                                result+="\nAnswer "+str(j+1)+" : "+" Bungee jumping point is located in Mohan Chatti village, in Rishikesh, India at a height of 83 meters."
                        elif(j  == count-1):
                            res = reading_contents[i].split("Question "+str(j+1)+".")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.replace(res1,"")
                            res2 = res2.replace("Answer:","")
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(" The minimum age to Bungee jump is 12 years.")
                            result+="\nAnswer "+str(j+1)+" : "+" The minimum age to Bungee jump is 12 years."

                    read_obj[read_cnt] = { "heading":reading_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1

                if "I. Read the data below and answer the following questions." in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    count = 4
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            res2 = res2.replace("Answer:","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+".")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            res2 = res2.replace("Answer:","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    ques_arr.append(" What is the difference between the percentage of women working in logistics and Medicine? (a) 8 (b) 11 (c) 13 (d) 5")
                    ans_arr.append("  (d) 5")

                    read_obj[read_cnt] = { "heading":reading_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 

                if "H. State whether the given statements are true or false. If false correct the statements." in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    read = reading_contents[i].split("Answer:")[1]
                    count = 5
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(read,str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("[")[0]
                            res2 = res.split("[")[1]
                            res2 = res2.replace("]","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = read.split(str(j+1)+".")[1]
                            res1 = res.split("[")[0]
                            res2 = res.split("[")[1]
                            res2 = res2.replace("]","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 


                if "K. State whether the following statements are true or false." in reading_contents[i]:
                    result+= "\n\n"+reading_out[i]+"\n"
                    count = 6
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("[")[0]
                            res2 = res.split("[")[1]
                            res2 = res2.replace("]","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+".")[1]
                            res1 = res.split("[")[0]
                            res2 = res.split("[")[1]
                            res2 = res2.replace("]","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1                  
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 

                if "H. Read the poem carefully and answer the questions that follow:" in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    count = 10
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],str(j+1)+". ",str(j+2)+". ")
                            if '(a)' in res:
                                res1 = res.split("of sacrifice.")[0]+"of sacrifice."

                            elif '?' in res:
                                res1 = res.split("?")[0]+"?"

                            else:
                                res1 = res.split("fourth stanza.")[0]+"fourth stanza."

                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.replace(res1,"")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+". ")[1]
                            res1 = "Write down"+find_between(res,"Write down","treasures on a tree")+"treasures on a tree"
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.replace(res1,"")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i],"poem":"It may be an image","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 


                if "J. Read the comic strip and ans’ e following questions." in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    count = 5
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+".")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            res2 = res2.replace("Question","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)

                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 

                if "I. Suggesting titles." in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    count = 6
                    reading_contents[i] = reading_contents[i].replace("Paragraph 3","Paragraph 3 4. Search begins Paragraph 6")

                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(" Paragraph ")[0]
                            res2 = res.split("Paragraph")[1]
                            ques_arr.append(res1)
                            result+="\n\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append("Paragraph "+res2)
                            result+="\nAnswer "+str(j+1)+" : "+"Paragraph "+res2
                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(" Paragraph ")[0]
                            res2 = res.split(" Paragraph ")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append("Paragraph "+res2)
                            result+="\nAnswer "+str(j+1)+" : "+"Paragraph "+res2

                    read_obj[read_cnt] = { "heading":reading_out[i]+"Title summarises the story. Each paragraph is a part of the story. Look at the following expressions and find out the paragraphs that best suit these expressions.","passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 

                if "J. Look at the following situations the writer was in. He could have avoided the situation and saved himself. Glance through the write up again and comment on what the writer should have done in the following situations." in reading_contents[i]:
                    result+= "\n"+reading_out[i]+"\n"
                    count = 5

                    for j in range(count):
                        if(j < count-1):
                            res = find_between(reading_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2
                        elif(j  == count-1):
                            res = reading_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    read_obj[cnt] = { "heading":reading_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    read_cnt+=1 
            read_object["Reading Activity"] = read_obj
            obj[cnt] = read_object
            cnt+=1
            
            letter_obj = {}
            letter_object = {}
            letter_cnt = 1

            if "M. Exercise:" in text: 
                ques_arr = []
                ans_arr = []
                count = 3
                result+="\nLetter Writing\n"
                result+="\n"+"M. Exercise:\n"
                letter = find_between(text,"M. Exercise:","Grammar")
                mylist = ['Samacheer Kalvi','Prose Chapter 3','Empowered Women Navigating The World – Samacheer Guru','10th English Solutions ','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books','/2021 ']
                for i in mylist:
                     letter = letter.replace(i,"")
                for j in range(count):
                    if(j < count-1):
                        res = find_between(letter,str(j+1)+". ",str(j+2)+". ")
                        res1 = res.split("From")[0]

                        res2 = "From"+res.split("From")[1]
                        res2 = res2.replace("Loading [MathJax]/extensions/MathMenu.js","")
                        res2 = res2.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                        ques_arr.append(res1)
                        result+="\nQuestion "+str(j+1)+" : "+res1
                        ans_arr.append(res2)
                        result+="\nAnswer "+str(j+1)+" : "+res2

                    elif(j  == count-1):
                        res = letter.split(str(j+1)+".")[1]
                        res1 = res.split("From")[0]
                        res2 = "From"+res.split("From")[1]
                        ques_arr.append(res1)
                        result+="\nQuestion "+str(j+1)+" : "+res1
                        ans_arr.append(res2)
                        result+="\nAnswer "+str(j+1)+" : "+res2

                letter_obj[letter_cnt] = { "heading":"M. Exercise:","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                letter_cnt+=1 

                letter_object["Letter writing"] = letter_obj
                obj[cnt] = letter_object
                cnt+=1

            write_obj = {}
            write_object = {}
            write_cnt = 1
            result+="\nWriting Activity\n"
            for i in range(len(writing_contents)): 
                ques_arr = []
                ans_arr = [] 
                count = 2
                if "I. Prepare attractive advertisements using the hints given below." in writing_contents[i]:
                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    result+="\n"+writing_out[i]+"\n"
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(writing_contents[i],str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = "It may be an image"
                            result+="\nAnswer "+str(j+1)+" : "+res
                            ans_arr.append(res)

                        elif(j  == count-1):
                            res = writing_contents[i].split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = "It may be an image"
                            result+="\nAnswer "+str(j+1)+" : "+res
                            ans_arr.append(res)

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "J. Write a report of the following events in about 100-120 words." in writing_contents[i]:
                    writing_contents[i] = writing_contents[i].replace("1. ","Question 1. ")
                    result+= "\n"+writing_out[i]+"\n"
                    count = 3
                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(writing_contents[i],"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = writing_contents[i].split("Question "+str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "Q. Prepare notice for the following:" in writing_contents[i]:
                    count = 3
                    result+= "\n"+writing_out[i]+"\n"
                    list1 = ['(i)','(ii)','(iii)']

                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            if j==0:
                                ques_arr.append("You are the school monitor, of Modern Matriculation School, Villupuram. Your school Principal has requested you to inform the students about a trip to Yercaud for 3 days. Prepare a notice giving the details such as date of journey, mode of transportation, amount, dress code etc.")
                                result+="\nQuestion "+str(j+1)+" : "+"You are the school monitor, of Modern Matriculation School, Villupuram. Your school Principal has requested you to inform the students about a trip to Yercaud for 3 days. Prepare a notice giving the details such as date of journey, mode of transportation, amount, dress code etc."
                                res = "It may be an image"
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res)
                            else:
                                res = find_between(writing_contents[i],list1[j],list1[j+1])
                                ques_arr.append(res)
                                result+="\nQuestion "+str(j+1)+" : "+res
                                res = "It may be an image"
                                result+="\nAnswer "+str(j+1)+" : "+res
                                ans_arr.append(res)

                        elif(j  == count-1):
                            res = writing_contents[i].split(list1[j])[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = "It may be an image"
                            result+="\nAnswer "+str(j+1)+" : "+res
                            ans_arr.append(res)

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "R. Write an article for the following:" in writing_contents[i]:
                    count = 3
                    result+= "\n"+writing_out[i]+"\n"
                    list1 = ['(i)','(ii)','(iii)']

                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                                res = find_between(writing_contents[i],list1[j],list1[j+1])
                                if j == 0:
                                    res1 = res.split("Importance of Physical Activities")[0]
                                    res2 = "Importance of Physical Activities"+res.split("Importance of Physical Activities")[1]
                                else:
                                    res1 = res.split("For the attention of the Editor of The Indian Express")[0]
                                    res2 = "For the attention of the Editor of The Indian Express"+res.split("For the attention of the Editor of The Indian Express")[1]
                                ques_arr.append(res1)
                                result+="\nQuestion "+str(j+1)+" : "+res1
                                ans_arr.append(res2)
                                result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = writing_contents[i].split(list1[j])[1]
                            res1 =res.split("Road traffic accidents (RTAs)")[0]
                            res2 = "Road traffic accidents (RTAs)"+res.split("Road traffic accidents (RTAs)")[1]
                            res2 = res2.replace("\nThe Attic by Satyajit Ray","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "M. Write a speech for your school Literary Association celebration with the given lead." in writing_contents[i]:
                    result+= "\n"+writing_out[i]+"\n"
                    writing_contents[i] = writing_contents[i].replace("M. Write a speech for your school Literary Association celebration with the given lead.","")
                    writing_contents[i] = writing_contents[i].replace("\n \nWriting\n:","")
                    ques_arr.append(writing_contents[i])

                    result+="\nQuestion : "+writing_contents[i]

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":""}
                    write_cnt+=1

                if "J. Read the given slogans and match them appropriately with their theme." in writing_contents[i]:
                    result+= "\n"+writing_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion : "+res
                    result+="\nAnswer : "+res

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":res,"answer":res}
                    write_cnt+=1

                if "K. Look at the images of familiar advertisements given below. Identify the products and try to frame your own slogans for each one of them." in writing_contents[i]:
                    result+= "\n"+writing_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion : "+res
                    result+="\nAnswer : "+res

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":res,"answer":res}
                    write_cnt+=1

                if "L. Look at the pitcures given below and frame your own slogans:" in writing_contents[i]:

                    result+= "\n"+writing_out[i]+"\n"
                    res = "It may be an image"
                    result+="\nQuestion : "+res
                    result+="\nAnswer : "+res

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":res,"answer":res}
                    write_cnt+=1

                if "K. Fill in the missing words in this email." in writing_contents[i]:
                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    result+= "\n"+writing_out[i]+"\n"

                    write_ques = "It may be an image"
                    write_ans = writing_contents[i].split("Answers:")[1]
                    count = 6
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(writing_contents[i],str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = writing_contents[i].split(str(j+1)+". ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":write_ques,"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "L. Write an email to your teacher about the interesting English model that you have prepared for the literary fest." in writing_contents[i]:

                    result+= "\n"+writing_out[i]+"\n"
                    write_ques=writing_out[i].replace("L.","")
                    result+="\nQuestion : "+write_ques
                    result+="\nAnswer : "+"It may be an image"
                    write_obj[write_cnt] = { "heading":writing_out[i],"question":write_ques,"answer":"It may be an image"}
                    write_cnt +=1

                if "N. Write about Your Favourite Sports person/ Famous personality/Hobby/ Recipe by starting your own blog." in writing_contents[i]:
                    ques_arr = ['Favourite Sportsman:','Famous personality','Hobby']
                    ans_arr = ["It may be an image","It may be an image","It may be an image"]
                    result+= "\n"+writing_out[i]+"\n"
                    for i in range(len(ques_arr)):
                        result+="\nQuestion "+str(i+1)+" : "+ques_arr[i]
                        result+="\nAnswer "+str(i+1)+" : "+ans_arr[i]
                    write_obj[write_cnt] = { "heading":"N. Write about Your Favourite Sports person/ Famous personality/Hobby/ Recipe by starting your own blog.","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt +=1

                if "M. Practice Exercise" in writing_contents[i]:
                    result+= "\n"+writing_out[i]+"\n"
                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    write_ques = writing_contents[i].split("Answer:")[0]
                    write_ans = "It may be an image"
                    result+="\nQuestion : "+write_ques
                    result+="\nAnswer : "+write_ans

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":write_ques,"answer":write_ans}
                    write_cnt +=1

                if "I. Create posters for following:" in writing_contents[i]:
                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    result+= "\n"+writing_out[i]+"\n"
                    count = 5
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(writing_contents[i],str(j+1)+".",str(j+2)+".")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            result+="\nAnswer:"+str(j+1)+"It may be an image"
                            ans_arr.append("It may be an image")
                        elif(j  == count-1):
                            res = writing_contents[i].split(str(j+1)+".")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            result+="\nAnswer:"+str(j+1)+"It may be an image"
                            ans_arr.append("It may be an image")


                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "I. Create a pamphlet for the following:" in writing_contents[i]:
                    writing_contents[i] = writing_contents[i].replace(writing_out[i],"")
                    result+= "\n"+writing_out[i]+"\n"
                    count = 3
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(writing_contents[i],str(j+1)+".",str(j+2)+".")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            result+="\nAnswer:"+str(j+1)+"It may be an image"
                            ans_arr.append("It may be an image")

                        elif(j  == count-1):
                            res = writing_contents[i].split(str(j+1)+".")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            result+="\nAnswer:"+str(j+1)+"It may be an image"
                            ans_arr.append("It may be an image")

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "J. Draft Letters for the following" in text: 
                    ques_arr = []
                    ans_arr = []
                    count = 5
                    result+= "\nJ. Draft Letters for the following\n"
                    
                    remove = ["/2021","Samacheer Kalvi","10th English Solutions","Prose Chapter 6","The Last Lesson – Samacheer Guru"]
                   
                    letter1 = find_between(text,"J. Draft Letters for the following","Grammar")
                    
                    letter1 = letter1.replace("The Last Lesson – Samacheer Guru","")
                    letter1 = letter1.replace("/2021","")
                    letter1 = letter1.replace("Samacheer Kalvi","")
                    letter1 = letter1.replace("10th English Solutions","")
                    letter1 = letter1.replace("Prose Chapter 6","")
                    
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(letter1,str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("From")[0]
                            res2 = "From"+res.split("From")[1]
                            res1 = res1.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            res2 = res2.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = letter1.split(str(j+1)+".")[1]
                            res1 = res.split("From")[0]
                            res2 = "From"+res.split("From")[1]
                            res1 = res1.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            res2 = res2.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    write_obj[write_cnt] = { "heading":"J. Draft Letters for the following","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

                if "J. Write a letter of enquiry for the following" in writing_contents[i]: 
                    ques_arr = []
                    ans_arr = []
                    count = 3
                    result+= "\n"+writing_out[i]+"\n"
                    letter = find_between(text,"J. Write a letter of enquiry for the following","Grammar")
                    letter = letter.replace(head+" – Samacheer Guru","")
                    letter = letter.replace("/2021","")
                    letter = letter.replace("Loading [MathJax]/extensions/MathZoom.js","")
                    letter = letter.replace("Samacheer Kalvi","")
                    letter = letter.replace("10th English Solutions","")
                    letter = letter.replace("Prose Chapter 7","")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(letter,str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("From")[0]
                            res2 = "From"+res.split("From")[1]
                            res2 = res2.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = writing_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("From")[0]
                            res2 = "From"+res.split("From")[1]
                            res2 = res2.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    write_obj[write_cnt] = { "heading":writing_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    write_cnt+=1

            write_object["Writing Activity"] = write_obj
            obj[cnt] = write_object
            cnt +=1
            
            listen_obj = {}
            listen_object = {}
            listen_cnt = 1
            result+="\nListening Activity\n"
            for i in range(len(listening_contents)): 
                ques_arr = []
                ans_arr = []  

                passage = ""
                if "E. Listen to the story and answer the following." in listening_contents[i]:
                    result+= "\n"+listening_out[i]+"\n"
                    passage = find_between(listening_contents[i],"E. Listen to the story and answer the following.","Question 1.  ")
                    result +="\nPassage : "+passage
                    listening_contents[i] = listening_contents[i].replace("10.","Question 10. ")
                    count = 10
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listening_contents[i],"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            res1 = res.split("Answer:")[0] 
                            ques_arr.append(res1)
                            res2 = res.split("Answer:")[1] 
                            ans_arr.append(res2) 
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            result+="\nAnswer "+str(j+1)+" : "+res2
                            listening_contents[i] = listening_contents[i].replace(res,"")+"Question "


                        elif(j  == count-1):
                            res = listening_contents[i].split(str(j+1)+".")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            res2  = res2.replace("Question","")
                            ques_arr.append(res1)
                            ans_arr.append(res2)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            result+="\nAnswer "+str(j+1)+" : "+res2




                    listen_obj[listen_cnt] = { "heading":listening_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1   

                if "G. Listen to the passage read by the teacher and say whether the given statement is true or false." in listening_contents[i]:
                    passage = find_between(listening_contents[i],"G. Listen to the passage read by the teacher and say whether the given statement is true or false.","1.")
                    count = 5
                    result+= "\n"+listening_out[i]+"\n"
                    result +="\nPassage : "+passage
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    listen_ques = find_between(listening_contents[i],"Enterprise.","Answers:")
                    listen_ans = listening_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listen_ques,str(j+1)+". ",str(j+2)+". ")
                            res1 = find_between(listen_ans,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            ans_arr.append(res1) 
                            result+="\nQuestion "+str(j+1)+" : "+res
                            result+="\nAnswer "+str(j+1)+" : "+res1

                        elif(j  == count-1):
                            res = listen_ques.split(str(j+1)+".")[1]
                            res1 = listen_ans.split(str(j+1)+".")[1]
                            ques_arr.append(res)
                            ans_arr.append(res1) 
                            result+="\nQuestion "+str(j+1)+" : "+res
                            result+="\nAnswer "+str(j+1)+" : "+res1


                    listen_obj[listen_cnt] = { "heading":listening_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1   

                if "N. Fill in the blanks :" in listening_contents[i]:
                    count = 8
                    result+= "\n"+listening_out[i]+"\n"
                    passage = find_between(text,"Listen to the procedure to book online tickets carefully and fill in the blanks that follow. Listen to the recording twice.","debit card or e-wallets.")+"debit card or e-wallets."
                    passage = passage.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                    result +="\nPassage : "+passage
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")

                    listen_ques =listening_contents[i].split("Answers:")[0]
                    listen_ans = listening_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listen_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res            
                            res = find_between(listen_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = listen_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = listen_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res

                    listen_obj[listen_cnt] = { "heading":listening_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1   

                if "F. Listen to the passage and state whether the statements are true (T), false (F) or no information (N)?" in listening_contents[i]:
                    count = 10
                    result+= "\n"+listening_out[i]+"\n"
                    passage = find_between(text,"F. Listen to the passage and state whether the statements are true (T), false (F) or no information (N)?","1.")
                    result +="\nPassage : "+passage
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listening_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("(")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("(")[1]
                            res2 = res2.replace(")","")
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = listening_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("(")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.split("(")[1]
                            res2 = res2.replace(")","")
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2


                    listen_obj[listen_cnt] = { "heading":listening_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1  

                if "G. Listen to the passage again and answer the questions." in listening_contents[i]:
                    count = 5
                    result+= "\n"+listening_out[i]+"\n"
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listening_contents[i],"Question "+str(j+1)+". ","Question "+str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = listening_contents[i].split("Question "+str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2) 
                            result+="\nAnswer "+str(j+1)+" : "+res2


                    listen_obj[listen_cnt] = { "heading":listening_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1 


                if "H. Complete the sentences after reading the passage." in listening_contents[i]:
                    count = 5
                    result+= "\n"+listening_out[i]+"\n"
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    listen_ques =listening_contents[i].split("Answers:")[0]
                    listen_ans = listening_contents[i].split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listen_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = find_between(listen_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = listen_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = listen_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res


                    listen_obj[listen_cnt] = { "heading":listening_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1 

                if "F. Listen to the article titled “Remembering Nel Jayaraman”" in listening_contents[i]:
                    count = 9
                    result+= "\n"+listening_out[i]+"\n"
                    passage = "It must have been eight years ago"+find_between(listening_contents[i],"It must have been eight years ago",", it will give back.")+", it will give back."

                    result +="\nPassage : "+passage
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    listen_ques = "Student A:"+find_between(text,"Student A:","Answers:")
                    listen_ans = listening_contents[i].split(", it will give back.")[1]
                    listen_ques = listen_ques.replace("Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books","")
                    result+="\nQuestion : "+listen_ques
                    ques_arr.append(listen_ques)
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listen_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = listen_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res) 
                            result+="\nAnswer "+str(j+1)+" : "+res


                    listen_obj[listen_cnt] = { "heading":listening_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1 

                if "E. Listen to the story and answer the question given below." in listening_contents[i]:
                    count = 8
                    result+= "\n"+listening_out[i]+"\n"
                    passage = find_between(listening_contents[i],listening_out[i],"1.")
                    result +="\nPassage : "+passage
                    listening_contents[i] = listening_contents[i].replace(listening_out[i],"")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listening_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            ans_arr.append(res2) 
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = listening_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("Answer:")[0]
                            res2 = res.split("Answer:")[1]
                            ques_arr.append(res1)
                            ans_arr.append(res2) 
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            result+="\nAnswer "+str(j+1)+" : "+res2


                    listen_obj[listen_cnt] = { "heading":listening_out[i],"passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1 

            if "Listening Activity" in text:
                ques_arr = []
                ans_arr=[]
                if "F. Here is a travelogue by the students of Government Girls Higher Secondary School, Pattukkottai after their trip to Darjeeling. " in text:
                    result+= "\n\nF. Here is a travelogue by the students of Government Girls Higher Secondary School, Pattukkottai after their trip to Darjeeling. \n"

                    passage = "A Trip to Remember Forever:"+find_between(text,"A Trip to Remember Forever:","(i) Fill in the blanks with suitable words.")
                    result +="\nPassage : "+passage
                    list1 = ["(i) Fill in the blanks with suitable words.","(ii) Do you think they had a memorable and enjoyable school trip?","(iii) Name a few places that you wish to visit with your classmates as a school trip.","(iv) State whether the following statements are True or False."]
                    ques_arr = list1

                    listen = find_between(text,"in our thoughts forever.","Speaking Activity")
                    mylist = ['Samacheer Kalvi','Prose Chapter 1 ','His First Flight – Samacheer Guru','10th English Solutions ','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books','6/17/2021 ','/2021']
                    for i in mylist:
                        listen = listen.replace(i,"")
                    count = 4
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(listen,list1[j],list1[j+1])
                            ans_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+list1[j]
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = listen.split(list1[j])[1]
                            res = res.replace("\n\n \n\n \n\n\n\n","")
                            ans_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+list1[j]
                            result+="\nAnswer "+str(j+1)+" : "+res


                    listen_obj[listen_cnt] = { "heading":"F. Here is a travelogue by the students of Government Girls Higher Secondary School, Pattukkottai after their trip to Darjeeling. Listen to the travelogue and answer the following questions.","passage":passage,"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    listen_cnt+=1 

                listen_object["Listening Activity"] = listen_obj
                obj[cnt] = listen_object
                cnt+=1

            affix_obj = {}
            affix_object = {}
            affix_cnt = 1
            if "Affixes" in textbook_content:
                result+="\nAffixes\n"
                ques_arr = []
                ans_arr=[]
                affix1 = find_between(textbook_content,"Form new words by adding appropriate prefix/suffix:","(ii) Frame sentences of your own using any five newly formed words.")
                result+="Form new words by adding appropriate prefix/suffix:"
                affix_ques = affix1.split("Answers:")[0]
                result+="\nQuestion : "+affix_ques   
                result+="\nAnswers: "
                affix_ans = affix1.split("Answers:")[1]
                count = 10
                for j in range(count):
                    if(j < count-1):
                        res = find_between(affix_ans,str(j+1)+". ",str(j+2)+". ")
                        result+=str(j+1)+". "+res                 
                        ans_arr.append(res)

                    elif(j  == count-1):
                        res = affix_ans.split(str(j+1)+". ")[1]
                        result+=str(j+1)+". "+res 
                        ans_arr.append(res)

                affix_obj[affix_cnt] = { "heading":"Form new words by adding appropriate prefix/suffix:","question":"","answer":toObject(ans_arr)}
                affix_cnt+=1

            if "Affixes" in textbook_content:
                ques_arr = []
                ans_arr = []
                affix1 = find_between(textbook_content,"(ii) Frame sentences of your own using any five newly formed words.","F. Fill in the blanks by adding appropriate prefix/suffix to the words given in brackets.")
                count = 5
                result+="Frame sentences of your own using any five newly formed words."
                result+="\nQuestions: It may be an image"
                result+="\nAnswers: "
                for j in range(count):
                    if(j < count-1):
                        res = find_between(affix1,str(j+1)+". ",str(j+2)+". ")
                        result+=str(j+1)+". "+res
                        ans_arr.append(res)

                    elif(j  == count-1):
                        res = affix1.split(str(j+1)+". ")[1]
                        result+=str(j+1)+". "+res
                        ans_arr.append(res)

                affix_obj[affix_cnt] = { "heading":"Frame sentences of your own using any five newly formed words.","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                affix_cnt+=1

            if "Affixes" in textbook_content:
                ques_arr = []
                ans_arr = []
                affix1 = find_between(textbook_content,"F. Fill in the blanks by adding appropriate prefix/suffix to the words given in brackets.","Grammar:")
                affix_ques = affix1.split("Answers:")[0]
                affix_ans = affix1.split("Answers:")[1]
                result +="F. Fill in the blanks by adding appropriate prefix/suffix to the words given in brackets."
                count = 8
                for j in range(count):
                    if(j < count-1):
                        res = find_between(affix_ques,str(j+1)+". ",str(j+2)+". ")
                        ques_arr.append(res)
                        result+="\nQuestion "+str(j+1)+" : "+res
                        res = find_between(affix_ans,str(j+1)+". ",str(j+2)+". ")
                        ans_arr.append(res)
                        result+="\nAnswer "+str(j+1)+" : "+res

                    elif(j  == count-1):
                        res = affix_ques.split(str(j+1)+". ")[1]
                        ques_arr.append(res)
                        result+="\nQuestion "+str(j+1)+" : "+res
                        res = affix_ans.split(str(j+1)+". ")[1]
                        ans_arr.append(res)
                        result+="\nAnswer "+str(j+1)+" : "+res

                affix_obj[affix_cnt] = { "heading":"F. Fill in the blanks by adding appropriate prefix/suffix to the words given in brackets.","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                affix_cnt+=1

                affix_object["Affixes"] = affix_obj
                obj[cnt] = affix_object
                cnt+=1

            nom_obj = {}
            nomi_obj = {}
            nom_cnt = 1
            for i in range(len(nominalisation_contents)-1):
                result+="\nNominalisation\n"
                ques_arr = []
                ans_arr = []
                if "G. Write the noun forms of the following words." in nominalisation_contents[i]:
                    result+="G. Write the noun forms of the following words."
                    count = 9
                    nom_ques = nominalisation_contents[i].split("Answer:")[0]
                    nom_ans = nominalisation_contents[i].split("Answer:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nom_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = find_between(nom_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = nom_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = nom_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    nom_obj[nom_cnt] = { "heading":nominalisation_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1

                if "H. Complete the following sentences using the noun form of the words given in brackets." in nominalisation_contents[i]:
                    count = 5
                    result +=nominalisation_out[i]+"\n"
                    nom_ques = nominalisation_contents[i].split("Answers")[0]
                    nom_ans = nominalisation_contents[i].split("Answers")[1]
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nom_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = find_between(nom_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = nom_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = nom_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    nom_obj[nom_cnt] = { "heading":nominalisation_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1


                if "I. Rewrite the sentences nominalising the underlined words. The first one has been done for you." in nominalisation_contents[i]:
                    count = 5
                    result +=nominalisation_out[i]+"\n"
                    result += "\nQuestion 1 : Students work diligently to score well in exams."
                    result+="\nAnswer 1 : Students work with diligence to score well in exams."    
                    ques_arr.append("Students work diligently to score well in exams.")
                    ans_arr.append("Students work with diligence to score well in exams.")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nominalisation_contents[i],str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+2)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+2)+" : "+res2

                        elif(j  == count-1):
                            res = nominalisation_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            result+="\nQuestion "+str(j+2)+" : "+res1
                            ques_arr.append(res1)
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+2)+" : "+res2

                    nom_obj[nom_cnt] = { "heading":nominalisation_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1

                if "K. Complete the sentences in the paragraph using the appropriate form of words given in brackets." in nominalisation_contents[i]:
                    count = 2
                    result +=nominalisation_out[i]+"\n"
                    nom_ques = nominalisation_contents[i].split("Answers")[0]
                    nom_ans = nominalisation_contents[i].split("Answers")[1]
                    nom_ans = nom_ans.replace("\nPhrases And Clauses  Finite And Non-Finite Verbs:","")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nom_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = find_between(nom_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = nom_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = nom_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    nom_obj[nom_cnt] = { "heading":nominalisation_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1

                if "J. Combine the pairs of sentences given below’ into a single sentence using the noun form of the highlighted words." in nominalisation_contents[i]:
                    count = 5

                    result +=nominalisation_out[i]+"\n"
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nominalisation_contents[i],str(j+1)+". ",str(j+2)+". ")
                            if j==0:
                                res1 = res.split("Everyone likes him for")[0]
                            if j==1:
                                res1 = res.split("he police wanted a proof")[0]
                            if j==2:
                                res1 = res.split("His speech")[0]
                            if j==3:
                                res1 = res.split("The punctuality")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.replace(res1,"")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = nominalisation_contents[i].split(str(j+1)+". ")[1]
                            res1 = res.split("The quick arrival ")[0]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            res2 = res.replace(res1,"")
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    nom_obj[nom_cnt] = { "heading":nominalisation_out[i],"question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1

            if "Nominalisation:" in textbook_content:
                if "L. Identify the phrases in the following sentences and classify them as Adjective, Adverb or Noun phrases." in textbook_content:
                    count = 5
                    result +="L. Identify the phrases in the following sentences and classify them as Adjective, Adverb or Noun phrases.\n"
                    ques_arr = []
                    ans_arr = []
                    nom = find_between(textbook_content,"L. Identify the phrases in the following sentences and classify them as Adjective, Adverb or Noun phrases.","M. Identify the clauses and classify them accordingly:")
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nom,str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = nom.split(str(j+1)+". ")[1]
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    nom_obj[nom_cnt] = { "heading":"L. Identify the phrases in the following sentences and classify them as Adjective, Adverb or Noun phrases.","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1

                if "M. Identify the clauses and classify them accordingly:" in textbook_content:
                    ques_arr = []
                    ans_arr = []
                    result+="M. Identify the clauses and classify them accordingly:\n"
                    count = 8
                    nom = find_between(textbook_content,"M. Identify the clauses and classify them accordingly:","Listening")
                    nom_q = nom.split("Answers:")[0]
                    nom_a = nom.split("Answers:")[1]
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(nom_q,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = find_between(nom_a,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = nom_q.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = nom_a.split(str(j+1)+". ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    nom_obj[nom_cnt] = { "heading":"M. Identify the clauses and classify them accordingly:","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    nom_cnt+=1

                    nomi_obj["Nominalisation"] = nom_obj
                    obj[cnt] = nomi_obj
                    cnt +=1


            active_obj= {}
            active_object = {}
            active_cnt = 1       
            if "Active And Passive:" in text:
                result+="Active and Passive:\n"
                mytext = find_between(text,"Active And Passive:","by the Assistant School Pupil Leader.")+"by the Assistant School Pupil Leader."
                mylist = ['Samacheer Kalvi','/2021','Prose Chapter 1 ','His First Flight – Samacheer Guru','10th English Solutions ','Class 12th 11th 10th 9th 8th 7th 6th 5th 4th TN Books','6/17/2021 ']
                for i in mylist:
                    mytext = mytext.replace(i,"")

                if "F. Change the following sentences to the other voice." in mytext:
                    result+= "\n\nF. Change the following sentences to the other voice."
                    active = find_between(mytext,"F. Change the following sentences to the other voice.","G. Change the following into Passive voice.")
                    count = 10
                    ques_arr = []
                    ans_arr = []
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(active,str(j+1)+". ",str(j+2)+". ")
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2


                        elif(j  == count-1):
                            res = active.split(str(j+1)+". ")[1]
                            res1 = res.split(".")[0]
                            res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    active_obj[active_cnt]= { "heading":"F. Change the following sentences to the other voice.","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    active_cnt += 1




                if "G. Change the following into Passive voice." in mytext:
                    active = find_between(mytext,"G. Change the following into Passive voice.","H. In")
                    count = 12
                    ques_arr = []
                    ans_arr = []
                    result+="\n\nG. Change the following into Passive voice."
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(active,str(j+1)+". ",str(j+2)+". ")
                            if "?" in res:
                                res1 = res.split("?")[0]
                                res2 = res.split("?")[1]
                            else:
                                res1 = res.split(".")[0]
                                res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                        elif(j  == count-1):
                            res = active.split(str(j+1)+". ")[1]
                            if "?" in res:
                                res1 = res.split("?")[0]
                                res2 = res.split("?")[1]
                            else:
                                res1 = res.split(".")[0]
                                res2 = res.split(".")[1]
                            ques_arr.append(res1)
                            result+="\nQuestion "+str(j+1)+" : "+res1
                            ans_arr.append(res2)
                            result+="\nAnswer "+str(j+1)+" : "+res2

                    active_obj[active_cnt] = { "heading":"G. Change the following into Passive voice.","question":toObject(ques_arr),"answer":toObject(ans_arr)}
                    active_cnt+=1

                if "H. In the following sentences the verbs have two objects namely Direct and Indirect objects. Change each of the following sentences into two passives using direct object as the subject in one and indirect in the other." in mytext:
                    active = find_between(mytext,"H. In the following sentences the verbs have two objects namely Direct and Indirect objects. Change each of the following sentences into two passives using direct object as the subject in one and indirect in the other.","I. Rewrite the following passage in Passive Voice.")
                    active = active.replace("/2021","")
                    count = 5
                    result+="\n\nH. In the following sentences the verbs have two objects namely Direct and Indirect objects. Change each of the following sentences into two passives using direct object as the subject in one and indirect in the other."
                    active_ques = active.split("Answers:")[0]
                    active_ans = active.split("Answers:")[1]
                    ques_arr = []
                    ans_arr = []
                    for j in range(count):
                        if(j < count-1):
                            res = find_between(active_ques,str(j+1)+". ",str(j+2)+". ")
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = find_between(active_ans,str(j+1)+". ",str(j+2)+". ")
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                        elif(j  == count-1):
                            res = active_ques.split(str(j+1)+". ")[1]
                            ques_arr.append(res)
                            result+="\nQuestion "+str(j+1)+" : "+res
                            res = active_ans.split(str(j+1)+". ")[1]
                            ans_arr.append(res)
                            result+="\nAnswer "+str(j+1)+" : "+res

                    active_obj[active_cnt] = { "heading":"H. In the following sentences the verbs have two objects namely Direct and Indirect objects. Change each of the following sentences into two passives using direct object as the subject in one and indirect in the other.","question":"","answer":toObject(ans_arr)}
                    active_cnt+=1

                if "J. Write a recipe of your favorite dish in passive voice. Remember to list out the ingredients . of the dish you have chosen and their quantity. Use Simple Present tense to write your recipe." in mytext:
                    active = find_between(mytext,"J. Write a recipe of your favorite dish in passive voice. Remember to list out the ingredients . of the dish you have chosen and their quantity. Use Simple Present tense to write your recipe.","K. Write a report of an event held at your school using Passive voice. Use Simple Past Tense to’narrate the event.")
                    active = active.replace("/2021","")
                    ques_arr = []
                    ans_arr = []
                    result+="\n\nJ. Write a recipe of your favorite dish in passive voice. Remember to list out the ingredients . of the dish you have chosen and their quantity. Use Simple Present tense to write your recipe."
                    result+="\n\nAnswer : \n"+active
                    ans_arr.append(active)
                    active_obj[active_cnt] = { "heading":"J. Write a recipe of your favorite dish in passive voice. Remember to list out the ingredients . of the dish you have chosen and their quantity. Use Simple Present tense to write your recipe.","question":"","answer":toObject(ans_arr)}
                    active_cnt+=1

                if "K. Write a report of an event held at your school using Passive voice. Use Simple Past Tense to’narrate the event." in mytext:
                    active = mytext.split("K. Write a report of an event held at your school using Passive voice. Use Simple Past Tense to’narrate the event.")[1]
                    result+="\n\nK. Write a report of an event held at your school using Passive voice. Use Simple Past Tense to’narrate the event."
                    result+="\n\nAnswer : \n"+active
                    ques_arr = []
                    ans_arr = []
                    ans_arr.append(active)
                    active_obj[active_cnt] = { "heading":"K. Write a report of an event held at your school using Passive voice. Use Simple Past Tense to’narrate the event.","question":"","answer":toObject(ans_arr)}
                    active_cnt+=1

                active_object["Active and Passive"] = active_obj
                obj[cnt] = active_object
                cnt+=1


            data = {
                        "name": heading,
                        "chapter no": ch_no,
                        "Questions": obj
                    }
            json_object=json.dumps(data, ensure_ascii = False, indent=14)
            
            mng_db = myclient['contentsDB'] # Replace mongo db name
            collection_name = 'prose-guide' # Replace mongo db collection name
            db_cm = mng_db[collection_name]

    #         db_cm.remove()
            db_cm.insert_one(json.loads(json_object))

            # Query data
            db_cm.collection_name.find()
#             print(json.dumps(data, ensure_ascii = False, indent=14)) 
#             file_name = "Ch"+str(ch_no)+"_prose_solution.json"
#             with open(file_name, 'w', encoding='utf-8') as f:
#                 json.dump(data, f, ensure_ascii=False, indent=4)
        

            final_result = result
            return final_result
        
    elif ty_pe == "supplementary-solution": 
        obj = {}
        between_head_content = []
        each_content = []
        question_arr = []
        answer_arr = []
        headings = []
        ques = {}
        q_arr = []
        an_arr =[]
        excercise = []
        result2 = ""
        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""

        def toObject(arr):
                rv = {};
                for i in range(len(arr)):
                    rv[i+1] = arr[i]
                return rv


        #remove url
        import re
        url_pattern = re.compile(r'https?://\S+|www\.\S+')
        text = url_pattern.sub(r'', text)

        #to remove unnecessary breaklines
        text = re.sub(r'(?<!\n)\n(?![\n\t])', ' ', text.replace('\r', ''))
        text = text.replace(' \n', '')

        pattern = r'[1-9]/[0-9][0-9]|[0-9]/[0-9]|[0-9][0-9]/[0-9][0-9]'
        # Match all digits in the string and replace them by empty string
        text = re.sub(pattern, '', text)

        text = text.replace('Answer:', '\nAnswer:')
        text = text.replace('Answers:', '\nAnswer:')
        text = text.replace('Section', '\nSection')
        text = text.replace('Prose', '\nProse')
        text = text.replace('Warm up', '\nWarm up')
        text = text.replace('Textbook Questions and Answers', '\nTextbook Questions and Answers\n')
        text = text.replace('10th English', '\n10th English')
        text = text.replace('Cancel replyYou must be logged in to post a comment.','\nCancel replyYou must be logged in to post a comment.')

        # j = 97
        for i in range(20):
            txt = str(i)+'.'
            text = text.replace('. '+txt, '. '+'\n'+txt)

        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['Samacheer Kalvi','Homework Help Civics','Tamil Nadu','Question Papers','Social Science',
                 'Multiply Fractions Calculator HCF LCM Calculator Factor Polynomials Calculator','Search','Skip to content',
                 'Search for','Model Question Papers','Recent Posts','10th English','102 in�ue']

        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            chapter_num = "Chapter - "+str(ch_no)
            newfile.write(chapter_num+"\n")
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)


        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info = file.read().rstrip('\n') 

            #TextBook Questions And Answers
            content=""
            textbook_content = find_between(info,"Textbook Questions and Answers","No Comments")
           
            textbook_content = textbook_content.replace("Question","\nQuestion")
          
            count=0
            alp = 65
            for i in range(26):
                textbook_content = textbook_content.replace(chr(alp+i)+"."+" ","\n"+chr(alp+i)+"."+" ")
                find_word = chr(alp+i)+". "
                split_head = find_word
                counter = textbook_content.count(find_word)
                count = count + counter
                
           

            x=""
            list1 = ['The Tempest','Zigzag','The Story of Mulan','The Aged Mother','A Day in 2889 of an American Journalist','The Little Hero of Holland','A Dilemma']
           

            result2 +="\nLesson Name : "+list1[ch_no-1]+"\n"
            result2 +="\nQuestions and Answers\n"

            #Content between 2 headings
            for i in range(count):
                    if(i<count-1):
                        start = chr(alp+i)+". "
                        end = chr(alp+(i+1))+". "

                        between_head_content.append(find_between(textbook_content, start, end))


                    elif(i==count-1):
                        
                        if(c_no == "1" or c_no == "2" or c_no == "6"):
                            
                            start = chr(alp+i)+". "
                            end = "Posted in Class"
                            
                            between_head_content.append(find_between(textbook_content, start, end))
                            

                        if(c_no == "3"):
                            start = chr(alp+i)+". "
                            end = "Question 3.  Rearrange the following sentence in a coherent order."

                            between_head_content.append(find_between(textbook_content, start, end))


                        if(c_no == "4"):
                            start = chr(alp+i)+". "
                            end = "Rearrange the following sentence in coherent order."

                            between_head_content.append(find_between(textbook_content, start, end))

                        if(c_no == "5"):
                            start = chr(alp+i)+". "
                            end = "Read the passage given below and answer the questions that follow:"

                            between_head_content.append(find_between(textbook_content, start, end))

                        if(c_no == "7"):
                            print(chr(alp+i)+". ")
                            start = chr(alp+i)+". "
                            end = "Read the following passage and answer the questions that follow."

                            between_head_content.append(find_between(textbook_content, start, end))




            c=1   
            c1 =1
            for j in range(len(between_head_content)):

                content = between_head_content[j]

                 #find headings name  

                if(operator.contains(content,"1.")):
                    resu = find_between(textbook_content,chr(alp+j)+". ","1.")
                    

                elif(operator.contains(content,"Question 1.")):
                    resu = find_between(textbook_content,chr(alp+j)+". ","Question 1.")
            

                elif(operator.contains(content,"The son made up his mind to take back his mother home.")):
                    resu = find_between(textbook_content,chr(alp+j)+". ","The son made up his mind to take back his mother home.")
                    
                else:
                    resu = find_between(textbook_content,chr(alp+j)+". ","Answer:")
                    


                resu=resu.replace("\nQuestion","")
                resu = resu.replace("\nAnswer:\n \nCoherent Order:\n","")
                headings.append(resu)
               
                #No of Questions in a single heading

                count1=0  
                find_word1 = 'Answer:'
                counter = content.count(find_word1)
                count1 = count1 + counter

                if(counter==0):
                    find_word1 = 'Answers:'

                    counter = content.count(find_word1)
                    count1 = count1 + counter
               
                print(" ")

                question_arr = []
                answer_arr =[]
                each_content = []
                result2 +="\n"+headings[j]+"\n"
                for i in range(count1):

                    if(i<count1-1):

                            start1 = "Question "+str(i+1)+"."
                            end1 = "Question "+str(i+2)+"."

                            each_content.append(start1+find_between(content, start1, end1))

                            #Find Questions

                            start = "Question "+str(i+1)+"."
                            end = "Answer:"
                            result = find_between(content, start, end)
                            if(result=="" or result=="\n" or result=="\n\n" or result == "\n \n"):
                                result="Image here"
                            question_arr.append(result)
                            result2+= "\nQuestion  : "+result
                            q_arr.append(result)

                            #Find Answers

                            res = each_content[i].split("Answer:")[1]
                            answer_arr.append(res)
                            result2+= "\nAnswer  : "+res
                            an_arr.append(res)




                    elif(i==count1-1):

                        if(operator.contains(content,"Question ")):

                            start1 = "Question "+str(i+1)+"."
                            end1 = chr(alp+c)+". "
                            result = find_between(content+chr(alp+c)+". ", start1, end1)

                            #Find Questions
                            start = "Question "+str(i+1)+"."
                            end = "Answer:"
                            result1 = find_between(content, start, end)
                            if(result1=="" or result1=="\n" or result1=="\n\n" or result1 == "\n \n"):
                                result1="Image here"
                            question_arr.append(result1)
                            result2+= "\nQuestion  : "+result1
                            q_arr.append(result1)

                            c = c + 1



                        else:
                            #Find Questions
                            start1 = headings[j]
                            end1 = chr(alp+c1+1)+". "

                            if(find_between(textbook_content, start1, end1)==""):
                                start1 = headings[j]
                                end1 = "Posted in Class"
                            result = start1+find_between(content+end1,start1, end1)
                            if(result=="" or result=="\n" or result=="\n\n" or result == "\n \n"):
                                result="Image here"
                            start = headings[j]
                            end = "Answer:"

                            if(find_between(content, start, end)==""):
                                start = chr(alp+j)+". "
                                end = "Answer:"


                            content  = content.replace(".",".\n")
                            result1 = find_between(content, start, end)
                            if(result1=="" or result1=="\n" or result1=="\n\n" or result1 == "\n \n"):
                                result1="Image here"
                            result2+= "\nQuestion  : "+result1
                            question_arr.append(result1)
                            q_arr.append(result1)

                            c = c + 1

                        each_content.append(result)

                        #find Answers
                        res = each_content[i].split("Answer:")[1]
                        if(res=="" or res=="\n" or res=="\n\n" or res == "\n \n"):
                                res="Image here"
                        answer_arr.append(res)
                        result2+= "\nAnswer : "+res
                        an_arr.append(res)



                        #Push the headings, questions and answers into JSON Object

                        obj[j+1] = { "Headings":headings[j],"question":toObject(question_arr),"answer":toObject(answer_arr)}



            #Print JSON format 
            data = {
                    "name": head,
                    "chapter no": ch_no,
                    "Questions": obj
                }
            json_object = json.dumps(data, ensure_ascii = False, indent=14)
            
            mng_db = myclient['contentsDB'] # Replace mongo db name
            collection_name = 'supplementary-guide' # Replace mongo db collection name
            db_cm = mng_db[collection_name]

    #         db_cm.remove()
            db_cm.insert_one(json.loads(json_object))

            # Query data
            db_cm.collection_name.find()

        #         mng_client = pymongo.MongoClient('localhost', 27017)
        #         mng_db = mng_client['solutions-guide'] # Replace mongo db name
        #         collection_name = 'supplementary' # Replace mongo db collection name
        #         db_cm = mng_db[collection_name]

        #         db_cm.insert(json.loads(json_object))

        #     #Print JSON format into a file
        #     file_name = "Chapter_"+"("+ch_no+")"+"_"+heading+"_supplementary.json"
        #     with open(file_name, 'w', encoding='utf-8') as f:
        #         json.dump(data, f, ensure_ascii=False, indent=4)


            info = info.replace('Leave a Reply','')    
            info = info.replace('Cancel replyYou must be logged in to post a comment.','')

            final_result = result2 
            return final_result

    if ty_pe == "poem-lesson":
        poem_content = ""
        glossary_result = ""
        poem_content1 = ["A.  Read","A. Read ","A.  Based on your understanding" ,"A. Answer ","Based on the understanding ","A.  Read"]
        lessons = ['Life','The Grumble Family','I am Every Woman','The Ant and the Cricket','The Secret of the Machines','No Men Are Foreign','The House on Elm Street']
        authors = ['Henry Van Dyke','L. M. Montgomery','Rakhi Nariani Shirke',"Adapted from Aesop's Fables",'Rudyard Kipling','James Falconer Kirkup','Nadia Bush']
        poem_lines = []
        poem_lines1 = ['Let me but live my life from year to year, ','It sat alone.','I guess it will always be a mystery',"And hope the road's last turn will be the best.","There's a family nobody likes to meet;",'Is connected with it at all, you see.','A woman is beauty innate,','Love her, respect her, keep her near...','A silly young cricket, accustomed to sing','Some crickets have four legs, and some have two.','We were taken from the ore-bed and the mine,','We are nothing more than children of your brain!','Remember, no men are strange, no countries foreign','Remember, no men are foreign, and no countries strange.']
        poem_desc = []
        poem_desc1 = ['This poem talks about','the growth of a nation.','The poet gives ','mend our ways.','A fable is a ',' hard work and planning. ','The poem deals with','human brain.','Read on the poem ','against ourselves.']
        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""
        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['10th English_Book.indb','Poem']

        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)

        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info = file.read().rstrip('\n')

        for i in poem_content1:
            if i in info:
                poem_content = info.split(i)[0]

        if ch_no <=6:
            for i in range(250):
                poem_content = poem_content.replace(str(i),"")

        else:
            for i in range(250):
                info = info.replace(str(i),"")

        if ch_no>1 and ch_no<=6:
            poem_desc = list(filter(lambda a: (a in text),poem_desc1))

            poem_desc_out = list(sorted(poem_desc, key=lambda item: text.index(item)))

            poem_description = poem_desc_out[0]+find_between(text,poem_desc_out[0],poem_desc_out[1])+poem_desc_out[1]

        else:
            poem_description = ""


        if ch_no<=6:
            poem_lines = list(filter(lambda a: a in text,poem_lines1))

            poemlines_out = list(sorted(poem_lines, key=lambda item: poem_content.index(item)))


            poemlines_result = poemlines_out[0]+find_between(poem_content,poemlines_out[0],poemlines_out[1])+poemlines_out[1]

        else:
            poemlines_result = info

        about_authors1 = ['James Falconer Kirkup (1918-2009)','Rakhi Nariani Shirke is an','degree in Education.',' in South Shields.','Henry Van Dyke ','honours.','L. M. Montgomery, (1874–1942)','Rudyard Kipling was born ',' died in 1936.','readers worldwide.','‘Aesop’s fables’ ','in many languages. ']
        about_authors = []
        if ch_no<=6:
            about_authors = list(filter(lambda a: a in text,about_authors1))

            about_authors_out = list(sorted(about_authors, key=lambda item: text.index(item)))
            about_authors_result = about_authors_out[0]+find_between(text,about_authors_out[0],about_authors_out[1])+about_authors_out[1]

        else:
            about_authors_result = ""

        glossary_words = ['','mourning (v)','discontent (adj.) ','innate (adj)','accustomed to (v) ','furnace (n) ','Condemn - ']
        if ch_no<=6:
            for i in glossary_words:
                if i in poem_content:
                    glossary_result = glossary_words[ch_no]+poem_content.split(glossary_words[ch_no])[1]
                    break

        else:
            glossary_result = ""
        
        json_obj = {}
        json_obj = {"name":lessons[ch_no-1],"chapter no":ch_no,"author":{"author name":authors[ch_no-1],"about the author":about_authors_result},"description":poem_description,"contents":poemlines_result,"glossary":glossary_result}
        result = "Lesson name:"+head+"\n\nAuthor name:"+authors[ch_no-1]+"\n\nPoem description:\n"+poem_description+"\n\nPoem lines:\n"+poemlines_result+"\n\nAbout the author:\n"+about_authors_result+"\n\nGlossary:\n"+glossary_result
        
        json_object=json.dumps(json_obj, ensure_ascii = False, indent=14)
        mng_db = myclient['contentsDB'] # Replace mongo db name
        collection_name = 'poems' # Replace mongo db collection name
        db_cm = mng_db[collection_name]

#         db_cm.remove()
        db_cm.insert_one(json.loads(json_object))

        # Query data
        db_cm.collection_name.find()
        final_result = result
        return final_result
    
    elif ty_pe == "prose-lesson": 
        lesson = ['','His First Flight','The Night the Ghost Got in','Empowered Women Navigating The World','The Attic','Tech Bloomers','The Last Lesson','The Dying Detective']
        glossary_words = ['gaunt','chirping','bifurcated','grapple','ledge','hullabaloo','circumnavigate']
        
        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""

        #Contents with Heading
        data = text
        f = open("demo.txt", "w",encoding='utf-8')
        f.write(data)
        f.close()

        open('demo_ch1.txt', 'w',encoding='utf-8').close()
        # removes empty lines and updates the same file
        # copy the contents of "demo.txt" into "demo_ch1.txt". No specific reason behind this. Or use "demo.txt for open()"
        f= open("demo_ch1.txt","r+",encoding='utf-8')
        lines = f.readlines()
        f.seek(0)
        f.writelines(line for line in lines if line.strip())
        f.close()


        #remove page numbers
        import re
        f=open("demo_ch1.txt","r+",encoding='utf-8')
        pattern = re.compile("^:\d+$|^\d+$")
        lines = f.readlines()
        f.seek(0)
        f.writelines(line for line in lines if not pattern.match(line))
        f.close()


        #remove Prose name and footer
        f= open("demo_ch1.txt","r+",encoding='utf-8')
        lines = f.readlines()
        f.seek(0)
        f.writelines(line for line in lines if not (line.startswith("Prose") or line.startswith("10th") ))
        f.close()


        #remove intext questions
        import re
        f=open("demo_ch1.txt","r",encoding='utf-8')
        f2 = open("demo_ch12.txt","w",encoding='utf-8')     

        lines = f.readlines()
        i = 0
        while( i <= len(lines)-1 ):                  
            if (re.search("^[a-z]\.", lines[i])):   
                if re.search("\?$", lines[i]):      
                    print(lines[i], end="")
                else:
                    print(lines[i], end="")
                    i+=1
                    while(not '?' in lines[i]):    
                        print(lines[i],end="")
                        i+=1
                    print(lines[i], end="")
            else:
                f2.write(lines[i])
            i += 1   
        f.close()
        f2.close()


        #remove Glossary items, retains only chapter content
        import re
        f=open("demo_ch12.txt","r",encoding='utf-8')
        f3 = open("demo_ch123.txt", "w",encoding='utf-8')       #has only chapter content

        lines = f.readlines()
        i = 0
        while( i <= len(lines)-1 ): 
            if (re.search("\(*\)-", lines[i])):
                print(lines[i])
                break
            else:
                f3.write(lines[i])
            i += 1
        f.close()
        f3.close()


        with open('demo.txt', 'r',encoding='utf-8') as file:
            text = file.read()

        text = re.sub(r'(?<!\n)\n(?![\n\t])', ' ', text.replace('\r', ''))
        text = text.replace(' \n', '')
        
        pattern = r'[1-9]/[0-9][0-9]|[0-9]/[0-9]|[0-9][0-9]/[0-9][0-9]'
            # Match all digits in the string and replace them by empty string

        text = re.sub(pattern, '', text)


        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['English_Book.indb','Prose','Liam O’Flaherty']
        
        authors = ["Liam O'Flaherty  (1896–1984)","James Grover Thurber  (1894–1961)",None,None,None,"Alphonse Daudet (1840-1897)","Sir Arthur Ignatius Conan Doyle  (1859-1930)"]

        end = ["About the author","rending(v)",None,None,None,"“Vive la France!”","“If so, let me bring Sir Jaspet Meek or  Penrose fisher, or Holmes”."]

        text = text.replace("\n"," ")

        about_author = ""

        if authors[ch_no-1] != None:

            if authors[ch_no-1] in text:

                author_detail = authors[ch_no-1]+' '+find_between(text,authors[ch_no-1],end[ch_no-1])

                about_author = author_detail

        else:
            author_detail = None
            about_author = author_detail

        if authors[ch_no-1]!= None and about_author !=None:

            author = {"author name": authors[ch_no-1],"about the author":about_author}
        else:
            author = None

        for i in range(250):
            words.append(str(i))

        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)


        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info = file.read().rstrip('\n') 

        prose_content = info.split("A.  ")[0]
        prose_content.rsplit(' ', 1)[0]

        for i in glossary_words:
            if i+" (" in prose_content:
                glossary_content = i+" ("+prose_content.split(i+" (")[1]
                break
        data = ["Alphonse Daudet","\ni.  Were the policemen willing to leave  the house?\nj.  What made the reporter gaze at the  author?\nAbout the Author\nwas best known for his cartoons and  short stories published mainly in The  New Yorker magazine, such as \"The  Catbird Seat\", and collected in his  numerous books. He was one of the  most popular humourists of his time,  as he celebrated the comic frustrations  and eccentricities of ordinary people.","\nfounding member of the Communist  Party of Ireland. A native Irish-speaker  from the Gaeltacht, O'Flaherty wrote  almost exclusively in English, except  for a small number of short stories in  the Irish language. He spent most of his  time in travelling and lived comfortably  and quietly outside the spotlight.\nAbout the author",'About the author ','h.  Which quality of the skipper helped to  bring out a successful expedition?','i.  Who among the crew mentioned about  teamwork?','j.  When did they witness the brilliant  southern lights from the sea?'," How did  the sky appear there?",'k.  What festival did they celebrate during  their expedition?']
        prose = prose_content.replace(glossary_content,"")
        for i in data:
            if i in glossary_content:
                glossary_content = glossary_content.replace(i,'')
                
        mylist = ["\nAbout the Author\n",'About the Author:','\ne.  Who did Watson see when he entered  the room?','\nf.  What were the instructions given by  Holmes to Watson?','\ni.  What explanation did Holmes give for  speaking rudely to Watson?','\nj.  How was Holmes able to look sick?','\ne.  What was Franz asked to tell? Was he  able to answer?','\nf.  Why did Mr.Hamel blame himself?','\n  e.  Why is technology important\naccording to David?','\nf.  Which instrument does David control  with his eye movements?','\ng.  What devices help David to move from  one place to other?','p.  Why did Sanyal recite the poem in the  tea shop earlier?','\nq.  What was engraved on the medal?\n','\nn.  What did the jeweller say about the  article?','\no.  Was Sanyal happy about his visitors?','\nl.   Why was the attic ‘a favourite place’  for the children?','\nm.  What did Aditya do on reaching the  attic?''\nc.  Who were Aditya’s ancestors?','\nf. Where was nagen uncle’s shop?','\ng.  Besides tea, what did Nagen uncle  have in his shop?','\nd.  How was  the landscape through which  they travelled.','\ne.  What did Aditya visit?','a.   When did Aditya  leave the local  school?','\nb.  Why did Aditya think that the school  would not be recognisable?','\ni.  Were the policemen willing to leave  the house?','\nj.  What made the reporter gaze at the  author?','e.  How did the Bodwells react, when a  shoe was thrown into their house?','\nc.  What were the various sounds the  brothers heard when they went  downstairs?','\nd.  Who were the narrator neighbours ?','\na.  Where was the author when he heard  the noise?','a. What does INSV stand for? b.  When was INSV Tarini commissioned\nto Indian Navy service?','c.  Who is Tara-Tarini? After whom was\nthe sailboat named?','\nb.  What did the narrator think the  unusual sound was?','\na. What is the future of technology?','\nb.  How many people in India suffer with  disability?','\na.  What kind of news was usually put up  on the bulletin board?','\nb.  What was the usual scene when school  began everyday?','\na.  How did Watson feel when he heard of  Holmes illness?','\nb.  Why didn’t the landlady call the  doctor?','a. Why did the seagull fail to fly?','\n b.  What did the parents do, when the\nyoung seagull failed to fly?','\nc.  Other than the students, who were  present in the class?','\nd.  Why did Mr. Hamel say it was the last  French lesson?','\nc.  What was the condition of Holmes  when Watson saw him?','\nd.  According to Holmes what was the  disease he was suffering from?','\nc. Who is Kim?','\nd. How does Kim help Alisha?','\nc.  What was the first catch of the young  seagull’s older brother?','\nd.  Where did the crew undergo their  basic training?','\ne.  How long were they trained to  undertake this voyage?','\nf.  Which skill was considered important  in the selection process?','\ng.  Who mentored the crew?','\nd.  What did the young seagull manage  to find in his search for food on the  ledge?','\ne.  What did the young bird do to seek the  attention of his parents?','\nf.  What did the Bodwells think when  they heard the mother shout','f. What made the young seagull go mad?','\ng.  What did M. Hamel say about the  French language?','\nh.  How many years had M. Hamel been  in the village?','\ng.  What was the grandfather wearing?','h.  What conclusions did grandfather\njump to when he saw the cops?','g.  Why did the young bird utter a joyful  scream?','i.  How did the bird feel when it started  flying for the first time?','\nj.  What did the young bird’s family do  when he started flying?','\nh.  What did Nagen uncle tell about  Sanyal?','\ni.  In what way was Mr. Sanyal’s behaviour  strange?','About the author','\ng.   Why did Holmes plead with Smith?','h.  Who was responsible for Victor\nSavage’s death? What was the  evidence for it?','\nh.  Did the mother bird offer any food to  the young bird?','i. How did the bird feel when it started flying for the first time?','\nj.  What did Nagen uncle tell about  Sanyal’s past life?','\nk.  How did Sanyal show that he had a  sense of self-respect?','j. What did the young bird’s family do when he started flying?']

        for i in mylist:
            prose = prose.replace(i,"")
            
        json_obj = {}
        json_obj = {"name":lesson[ch_no],"chapter no":ch_no,"contents":prose,"author":author,"glossary":glossary_content}
        
        if about_author != None:
            result = "Lesson name:"+head+"\n\nContent:"+prose+"\n\nAbout the author:\n"+about_author+"\n\nGlossary:\n"+glossary_content
        else:
            result = "Lesson name:"+head+"\n\nContent:"+prose+"\n\nAbout the author:\n"+"No author for this lesson"+"\n\nGlossary:\n"+glossary_content
       
        json_object=json.dumps(json_obj, ensure_ascii = False, indent=14)
        
        
        
        mng_db = myclient['contentsDB'] # Replace mongo db name
        collection_name = 'proses' # Replace mongo db collection name
        db_cm = mng_db[collection_name]

#         db_cm.remove()
        db_cm.insert_one(json.loads(json_object))

        # Query data
        db_cm.collection_name.find()
        final_result = result
        return final_result
    
    elif ty_pe == "supplementary-lesson": 
        def find_between( s, first, last ):
            try:
                start = s.index( first ) + len( first )
                end = s.index( last, start )
                return s[start:end]
            except ValueError:
                return ""
        lesson = ['','The Tempest','Zigzag','The Story of Mulan','The Aged Mother','A day in 2889 of an American Journalist',' The Little Hero of Holland','A Dilemma']
        glossary_words = ['tormenting (v) ','aboriginal (adj.) ','carving (v) ','despotic (adj.) ','phonotelephote(n):','dikes (n) ',' ingenious (adj.)  -']
        authors = ['William Shakespeare ','Asha Nehemiah ','','Matsuo Basho ','Jules Verne ','Mary Mapes Dodge ','Silas Weir Mitchell ']
        data = text
        author_desc1 = ['(1564–1616) was','1589 and 1613.','born in 1958','reading and travelling.','(1644-1694) is','writing.','after him.','(1831–1905) was an American',' Tennyson etc.','(1828–1905) was','with the Internet.','Matsuo Basho (1644-1694)','inspiration for his writing.',' (1829-1914) ']
        author_desc = []
        sup1 = ""
        if ch_no == 3:
            author_description = ""

        else:
            for i in author_desc1:
                if i in data:
                    author_desc.append(i)

            author_out = list(sorted(author_desc, key=lambda item: data.index(item)))
            if ch_no == 5:
                author_out.remove("writing.")
            author_description = author_out[0]+find_between(data,author_out[0],author_out[1])+author_out[1]


        if ch_no == 5:
            sup = "The year is 2889, the"+find_between(data,"The year is 2889, the","house he owned in the Champs-Elysees.")+"house he owned in the Champs-Elysees."
            sup1 = "The year is 2889, the"+find_between(data,"The year is 2889, the","newspapers are not printed but ‘spoken’.")+"newspapers are not printed but ‘spoken’."
            data.replace(sup,"")
            data = sup+data

        if ch_no == 6:
            sup = "Holland is a country"+find_between(data,"Holland is a country"," ships far out at sea. Then ")+"ships far out at sea. Then "
            data.replace(sup,"")
            data = sup+data




        #Contents with Heading
        f = open("demo.txt", "w",encoding='utf-8')
        f.write(data)
        f.close()

        open('demo_ch1.txt', 'w',encoding='utf-8').close()
        # removes empty lines and updates the same file
        # copy the contents of "demo.txt" into "demo_ch1.txt". No specific reason behind this. Or use "demo.txt for open()"
        f= open("demo_ch1.txt","r+",encoding='utf-8')
        lines = f.readlines()
        f.seek(0)
        f.writelines(line for line in lines if line.strip())
        f.close()


        #remove page numbers
        import re
        f=open("demo_ch1.txt","r+",encoding='utf-8')
        pattern = re.compile("^:\d+$|^\d+$")
        lines = f.readlines()
        f.seek(0)
        f.writelines(line for line in lines if not pattern.match(line))
        f.close()


        #remove supplementary name and footer
        f= open("demo_ch1.txt","r+",encoding='utf-8')
        lines = f.readlines()
        f.seek(0)
        f.writelines(line for line in lines if not (line.startswith("Supplementary") or line.startswith("10th") ))
        f.close()


        #remove intext questions
        import re
        f=open("demo_ch1.txt","r",encoding='utf-8')
        f2 = open("demo_ch12.txt","w",encoding='utf-8')      # file contains without any intext questions

        lines = f.readlines()
        i = 0
        while( i <= len(lines)-1 ):                  # using while loop, as we need to change the iteration in between, for loop does not
            if (re.search("^[a-z]\.", lines[i])):   # search for the pattern a. b. c. etc
                if re.search("\?$", lines[i]):      # search for the line if it ends with ?.  findall() also works well.
                    print(lines[i], end="")
                else:
                    print(lines[i], end="")
                    i+=1
                    while(not '?' in lines[i]):     # if intext question has multiple lines, this section loops and finds it out
                        print(lines[i],end="")
                        i+=1
                    print(lines[i], end="")
            else:
                f2.write(lines[i])
            i += 1   
        f.close()
        f2.close()


        #remove Glossary items, retains only chapter content
        import re
        f=open("demo_ch12.txt","r",encoding='utf-8')
        f3 = open("demo_ch123.txt", "w",encoding='utf-8')       #has only chapter content

        lines = f.readlines()
        i = 0
        while( i <= len(lines)-1 ): 
            if (re.search("\(*\)-", lines[i])):
                print(lines[i])
                break
            else:
                f3.write(lines[i])
            i += 1
        f.close()
        f3.close()


        with open('demo.txt', 'r',encoding='utf-8') as file:
            text = file.read()

        text = re.sub(r'(?<!\n)\n(?![\n\t])', ' ', text.replace('\r', ''))
        text = text.replace(' \n', '')


        open('newfile.txt', 'w').close()
        open('oldfile.txt', 'w').close()
        text = "".join([s for s in text.strip().splitlines(True) if s.strip("\r\n")])
        f = open("oldfile.txt", "a",encoding = "utf-8")
        f.write(text)
        f.close()

        words = ['English_Book.indb']

        for i in range(250):
            words.append(str(i))

        with open('oldfile.txt','r',encoding='utf-8') as oldfile, open('newfile.txt', 'w',encoding='utf-8') as newfile:
            for line in oldfile:
                if not any(word in line for word in words):
                    newfile.write(line)


        with open('newfile.txt', 'r',encoding='utf-8') as file:
            info = file.read().rstrip('\n') 
        description = "" 
        desc = ""
        supplementary_content = info.split("A. ")[0]

        for i in glossary_words:
            if i in supplementary_content:
                glossary_content = i+supplementary_content.split(i)[1]

        supplementary_running_text = supplementary_content.split(glossary_words[ch_no-1])[0]

        if ch_no == 1:
            description = " The play 'The Tempest' "+find_between(data," The play 'The Tempest' ","of the wreck.")+"of the wreck."
            supplementary_running_text = supplementary_running_text.replace(supplementary_running_text.split("About the author")[1],"")

        if ch_no == 3:
            description = supplementary_content.split("to be true, or mostly true.")[0]+"to be true, or mostly true."
            supplementary_running_text = supplementary_running_text.replace(supplementary_running_text.split("or mostly true.")[0]+"or mostly true.","")

        if ch_no == 4:
            description = "This Japanese folktale "+supplementary_content.split("have for one another")[0]+"have for one another"
            supplementary_running_text = supplementary_running_text.split("have for one another")[1]
            supplementary_running_text = supplementary_running_text.replace(description,"")

        if ch_no == 5:
            description = "This story speaks about"+find_between(data,"This story speaks about","To them all seem natural")+"To them all seem natural"
        #     print(description)  

        if ch_no == 2:
            description = "The family that "+supplementary_content.split("Dr. Ashok T. Krishnan’s clinic ")[0]
            supplementary_running_text = supplementary_running_text.replace(supplementary_content.split("Dr. Ashok T. Krishnan’s clinic ")[0],"") 
            supplementary_running_text = supplementary_running_text.replace("\nis now a resident of Bangalore."+supplementary_running_text.split("\nis now a resident of Bangalore.")[1],"") 


        if ch_no == 6:
            description = "This is a true story of a little boy  with a brave heart and passionate  love for his village. Read on the story to find what the little hero of  Holland did to save his fellowmen.\n"
            supplementary_running_text = supplementary_running_text.replace("About the author"+supplementary_running_text.split("About the author")[1],"") 

        supplementary_running_text = supplementary_running_text.replace("Glossary","")   
        supplementary_running_text = supplementary_running_text.replace("About the author","")
        supplementary = supplementary_content.replace("to be true, or mostly true.","")

        json_obj = {}
        json_obj = {"name":lesson[ch_no],"chapter no":ch_no,"author":{"author name":authors[ch_no-1],"about the author":author_description},"description":description,"contents":sup1+supplementary_running_text,"glossary":glossary_content}
        json_object=json.dumps(json_obj, ensure_ascii = False, indent=14)
        mng_db = myclient['contentsDB'] # Replace mongo db name
        collection_name = 'supplementaries' # Replace mongo db collection name
        db_cm = mng_db[collection_name]

#         db_cm.remove()
        db_cm.insert_one(json.loads(json_object))

        # Query data
        db_cm.collection_name.find()

        result = "\nLesson name:"+head+"\n\nAuthor name:"+authors[ch_no-1]+"\n\nAuthor description:\n"+author_description+"\n\nStory description:\n"+description+"\n\nLesson content:\n"+sup1+supplementary_running_text+"\n\nGlossary:\n"+glossary_content
        final_result = result
        return final_result
