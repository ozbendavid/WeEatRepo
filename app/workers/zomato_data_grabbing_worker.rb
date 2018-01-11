class ZomatoDataGrabbingWorker
  include Sidekiq::Worker

  def perform(*args)
    print "\a"
    sleep 10
    print "\a"
  end
end
