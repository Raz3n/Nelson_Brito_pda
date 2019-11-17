### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
   #attr_reader and attr_accessor missing

  def checkforAce(card)  #parameter not needed
    if card.value = 1   #double == needed      card.value would be replaced by @ in def
      return true       #initialize
    else
      return false
    end
  end

  dif highest_card(card1 card2)  #mispelled def missing self.  #missing , between card1 and card2
  if card1.value > card2.value   #first return should be card1 not card.
    return card                  #extra end in function.
  else
    return card2
  end
end
end

def self.cards_total(cards)
  total                    #total is not a variable as it is not = to anything
  for card in cards        #return should be between the two ends as it interrupts the loop
    total += card.value    
    return "You have a total of" + total  #total needs to be made into a string to
  end                                     #display as a string
end

#class CardGame missing end
```
