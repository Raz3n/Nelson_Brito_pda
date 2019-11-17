require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')


class CardGameTest < MiniTest::Test

  def setup
    @card1 = CardGame.new('Diamonds', 1)
    @card2 = CardGame.new('Hearts', 9)

    @cards = [@card1, @card2]
  end

  def test_checkforAce
    assert_equal(true, @card1.checkforAce)
  end

  def test_highest_card
    result = CardGame.highest_card(@card1, @card2)
    assert_equal(@card2, result)
  end

  def test_cards_total
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of: 10", result)
  end

end
