# frozen_string_literal: true

class MainAppController < ApplicationController
  layout "main_app"

  def index
    @main_app_props = { name: "Stranger" }
  end
end
