class Score < ApplicationRecord
  belongs_to :user

  def self.all_scores
    select('value, user_id, u.email, scores.id')
      .join('INNE JOIN users u ON u.id = scores.user_id')
      .order(value: :desc)
      .limit(10)
  end
end
