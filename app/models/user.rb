# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :friend_profiles, Array

  def self.discover(ids)
    ids = ids.empty? ? [0] : ids
    Profile.where("id NOT IN(?)",ids).order("RANDOM()")
  end

  def self.friends(ids)
    ids = ids.empty? ? [0] : ids
    Profile.where("id IN (?)", ids)
  end
end
