module ApplicationHelper
  def render_react_component(*args, &block)
    content_for :webpacker_assets do
      assets = []
      assets << javascript_pack_tag('application')
      assets << stylesheet_pack_tag('application')
      assets.join("\n").html_safe
    end
    react_component(*args, &block)
  end
end
